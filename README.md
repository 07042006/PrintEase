# PrintEase
PrintEase: Extensão Automatizada de Impressão no Chrome

## Uso da extensão
### Armazenamento das Configurações
Utilizeremos a API de armazenamento local do Chrome para armazenar as configurações que o usuário selecionar na interface da extensão.

### Aplicação das Configurações
Implementaremos a lógica necessária para aplicar as configurações de impressão selecionadas pelo usuário. Isso pode ser feito utilizando a API de impressão do Chrome.

### Opções Adicionais
Comos estamos oferecendo opções extras, como cabeçalhos e rodapés, ou gráficos de segundo plano, nos certificaremos de implementar a lógica necessária para lidar com essas opções também.

### Interface de Configuração
Melhoraremos a interface da extensão para tornar mais fácil para o usuário configurar suas preferências de impressão. Isso pode envolver a adição de mais opções, melhor organização da interface e feedback claro para o usuário sobre suas seleções.

### Testes e Depuração
Testaremos a extensão em diferentes cenários de impressão e nos certificaremos de lidar com casos de uso comuns e excepcionais de maneira adequada. Isso pode ajudar a evitar problemas e melhorar a experiência do usuário.

## Configurações para impressões
### Tamanho do papel
```javascript
paperSizeOptions = {
    "options": [
        "Carta", "Tablóide", "Extrato", "Executivo", "A3", "A4", "A5", "B4 (JIS)", "B5 (JIS)"
    ]
}
```

### Páginas por folha
```javascript
pagePerSheet = {
    "options": [
        1, 2, 4, 6, 9, 16
    ]
}
```

### Margens
```javascript
marginsOptions = {
    "options": [
        "Padrão", "Nenhuma", "Personalizada"
    ]
}
```

## Atualizações
### 26/01/2024
Desenvolvimento da tela de configuração das extensões:

![image](https://github.com/07042006/PrintEase/assets/50891842/d32a8472-81b3-4a29-a72d-318060182cc1)
