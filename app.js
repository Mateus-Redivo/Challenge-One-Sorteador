// Array para armazenar os nomes dos amigos
let amigos = [];

// Referência ao elemento da lista no HTML
let lista = document.getElementById('listaAmigos');
lista.innerHTML = '';

// Função para adicionar um nome à lista de amigos
function adicionarAmigo(){
    let campoNome = document.getElementById('amigo')
    let nome = campoNome.value;

    // Verifica se o campo de nome está vazio
    if (nome === ''){
        alert('Por favor, insira um nome.')
        return;
    }

    // Converte a primeira letra para maiúscula e o restante para minúscula
    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

    // Verifica se o nome já está na lista
    if (amigos.includes(nome)) {
        alert('Nome duplicado, insira outro');
        return
    }

    // Adiciona o nome à lista e atualiza a interface
    amigos.push(nome)
    limparCampo();
    AtualizarLista();
    console.log(nome);
} 

// Adiciona um evento para adicionar nomes quando a tecla Enter for pressionada
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});

// Função para atualizar a lista de amigos no HTML
function AtualizarLista(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = '';

    // Adiciona cada nome como um item da lista
    amigos.forEach(function(nome) {
        lista.innerHTML += `<li>${nome}</li>`
    })
}

// Atualiza a lista inicialmente
AtualizarLista();

// Função para sortear um amigo aleatoriamente
function sortearAmigo(){
    // Verifica se a lista de amigos está vazia
    if (amigos.length === 0){
        alert('A lista de amigos esta vazia! Adicione um nome para sortear')
        return;
    }

    // Sorteia um índice aleatório e seleciona o amigo correspondente
    let amigosAleatorios = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigosAleatorios];

    // Exibe o amigo sorteado e remove-o da lista
    document.getElementById("resultado").innerHTML = `🎉 O amigo secreto é: <strong>${amigoSorteado}</strong>`;
    amigos.splice(amigosAleatorios, 1);
    AtualizarLista();

    // Torna a lista de amigos invisível
    document.getElementById('listaAmigos').style.display = 'none';
} 

// Função para limpar o campo de entrada de nome
function limparCampo(){
    nome = document.getElementById('amigo')
    nome.value = '';
}
