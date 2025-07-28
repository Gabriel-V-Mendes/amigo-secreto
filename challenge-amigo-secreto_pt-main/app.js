
let amigos = [];


function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    
   
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido!');
        return;
    }
    
   
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado à lista!');
        inputAmigo.value = '';
        return;
    }
    
    
    amigos.push(nomeAmigo);
    
   
    atualizarListaAmigos();
    
   
    inputAmigo.value = '';
    inputAmigo.focus();
}


function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    
    listaAmigos.innerHTML = '';
    
   
    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}


function sortearAmigo() {
    const resultadoDiv = document.getElementById('resultado');
    
 
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }
    
   
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    
    const amigoSorteado = amigos[indiceAleatorio];
    
   
    resultadoDiv.innerHTML = `🎉 O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong>`;
}


document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            adicionarAmigo();
        }
    });
});
