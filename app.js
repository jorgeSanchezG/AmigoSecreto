// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Debe ingresar un nombre para agregar el amigo secreto');
    } else {
        amigos.push(nombre);
        inputAmigo.value = '';
        actualizarLista();
    }
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    for(let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (amigos.length >= 1){
        amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];
        let li = document.createElement('li');
        li.textContent = 'El amigo secreto seleccionado es: '+amigoSeleccionado;
        resultado.appendChild(li);
    }else{
        alert('No cumple con la cantidad de amigos necesarios para realizar el sorteo. Por favor, agregue al menos un amigo.')
    }
}