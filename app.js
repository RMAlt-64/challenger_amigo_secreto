// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = document.getElementById('amigo');
let boton = document.getElementById('boton');
function agregarAmigo(){
    let listaAmigos = [];
    let amigo = nombres.value;
    
    listaAmigos.push(amigo);
    
    console.log(listaAmigos);

}


boton.addEventListener('click', agregarAmigo());
