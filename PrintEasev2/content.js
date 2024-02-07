// Este script é injetado na página dos Pedidos Pendentes para manipular o comportamento do botão "Aprovar e Imprimir"
document.addEventListener('DOMContentLoaded', function() {
    // Identifica o botão "Aprovar e Imprimir" na página
    var aprovarImprimirButton = document.querySelector('seletor-do-botao');
  
    // Adiciona um evento de clique ao botão
    aprovarImprimirButton.addEventListener('click', function() {
      // Simula um clique no botão para abrir o popup
      aprovarImprimirButton.click();
  
      // Aguarda um pequeno intervalo para garantir que o popup foi aberto
      setTimeout(function() {
        // Seleciona automaticamente a opção de download do PDF e a pasta de destino
        // Substitua 'seletor-do-input-pdf' e 'caminho-da-pasta' com os seletores e caminhos apropriados
        document.querySelector('button-printer').click();
        document.querySelector('caminho-da-pasta').value = 'caminho-da-pasta-de-destino';
  
        // Evento de clique no botão para confirmar o download do PDF
        document.querySelector('action-button').click();
  
        // Se houver uma impressora conectada, você pode usar a API de impressão do Chrome para enviar o PDF diretamente para a impressora padrão do usuário
        // Consulte a documentação da API de impressão do Chrome para obter mais detalhes: https://developer.chrome.com/docs/extensions/reference/printing/
      }, 1000); // Aguarda 1 segundo para o popup ser aberto completamente
    });
  });
  