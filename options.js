paperSizeOptions = {
    "options": [
        "Carta", "Tablóide", "Extrato", "Executivo", "A3", "A4", "A5", "B4 (JIS)", "B5 (JIS)"
    ]
}

pagePerSheet = {
    "options": [
        1, 2, 4, 6, 9, 16
    ]
}

marginsOptions = {
    "options": [
        "Padrão", "Nenhuma", "Personalizada"
    ]
}

/* Add options - paperSizeOptions */
const selectTamanhoPapelPadraoElement = document.getElementById('tamanhoPapelPadrao');
paperSizeOptions.options.forEach(option => {
    let optionElement = document.createElement('option');
    optionElement.textContent = option;
    optionElement.value = option;
    selectTamanhoPapelPadraoElement.appendChild(optionElement);
});

/* Add options - marginsOptions */
const selectMargemPadrao = document.getElementById('margemPadrao');
marginsOptions.options.forEach(option => {
    let optionElement = document.createElement('option');
    optionElement.textContent = option;
    optionElement.value = option;
    selectMargemPadrao.appendChild(optionElement);
});

/* Add options - pagePerSheet */
const selectPagesPerSheetPadrao = document.getElementById('pagesPerSheetPadrao');
pagePerSheet.options.forEach(option => {
    let optionElement = document.createElement('option');
    optionElement.textContent = option;
    optionElement.value = option;
    selectPagesPerSheetPadrao.appendChild(optionElement);
});