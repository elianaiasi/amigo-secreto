// Array para armazenar os nomes
const amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); // Remove espaços extras

    // Validação do campo
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Adicionar ao array
    amigos.push(nome);

    // Atualizar a lista na tela
    atualizarLista();

    // Limpar o campo de entrada
    input.value = '';
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizá-la

    amigos.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia! Adicione nomes antes de sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    const item = document.createElement('li');
    item.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(item);
}
