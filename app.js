
let entrada = document.getElementById('amigo');
let boton = document.getElementById('boton');
let listaAmigos = [];
function agregarAmigo(){
    if(entrada.value == ""){
        alert("Debe ingresar un nombre");
    } else {
        let lista = document.getElementById('listaAmigos');
        let nombres = entrada.value;
        listaAmigos.push(nombres);
        console.log(listaAmigos);
        let li = document.createElement('li');
        li.textContent = nombres;
        lista.appendChild(li);
        entrada.value = "";
    }
    
}

