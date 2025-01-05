let totalGeral = 0;
limpar();

// Configurar o campo quantidade inicialmente com 0 em cinza claro
let campoQuantidade = document.getElementById('quantidade');
campoQuantidade.value = 0;
campoQuantidade.style.color = 'lightgray';

function adicionar() {
    // Recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = parseInt(document.getElementById('quantidade').value, 10) || 0;

      // Verificar se a quantidade é válida
      if (!quantidade || quantidade <= 0) {
        
        return;
    }

    // Calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;

    // Adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

    // Atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;


    // Resetar o campo quantidade para 0 em cinza claro
    campoQuantidade.value = 0;
    campoQuantidade.style.color = 'lightgray';
}

// Tornar o texto preto ao digitar e manter o estilo de entrada
campoQuantidade.addEventListener('input', () => {
    campoQuantidade.value = parseInt(campoQuantidade.value, 10) || ''; // Remove zeros à esquerda
    campoQuantidade.style.color = campoQuantidade.value ? 'black' : 'lightgray';
});

function limpar() {
    totalGeral = 0;  // Reseta o totalGeral
    document.getElementById('lista-produtos').innerHTML = '';  // Limpa a lista de produtos
    document.getElementById('valor-total').textContent = 'R$ 0';  // Reseta o valor total
}
