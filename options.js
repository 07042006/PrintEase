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

/* Ativar e Desativar robô */

// Verifica se a extensão está ligada ou desligada
let isExtensionEnabled = localStorage.getItem('extensionEnabled');

// Se o estado não estiver definido, padrão é ligado
if (isExtensionEnabled === null) {
    isExtensionEnabled = true; // padrão é ligado
    localStorage.setItem('extensionEnabled', true);
} else {
    isExtensionEnabled = JSON.parse(isExtensionEnabled); // converte para boolean
}

if(isExtensionEnabled){
    document.getElementById("statusExtension").innerText = "Extensão: Ligado";
}else{
    document.getElementById("statusExtension").innerText = "Extensão: Desligado";
}

// Função para alternar entre ligado e desligado
function toggleExtension() {
    isExtensionEnabled = !isExtensionEnabled;
    localStorage.setItem('extensionEnabled', isExtensionEnabled);
    if(isExtensionEnabled){
        document.getElementById("statusExtension").innerText = "Extensão: Ligado";
    }else{
        document.getElementById("statusExtension").innerText = "Extensão: Desligado";
    }
}

document.getElementById("toggleButton").addEventListener("click", toggleExtension)

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