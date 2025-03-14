let entrada = document.getElementById('amigo');
let listaAmigos = [];
function agregarAmigo(){
    if(entrada.value !== ""){
        let nombres = entrada.value;
        listaAmigos.push(nombres);
        entrada.value = "";
        actualizarLista();
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function actualizarLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i = 0; i <listaAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){ 
    let resultado = document.getElementById('resultado');
    if (listaAmigos.length > 0 || listaAmigos.length > 2 ){
        let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
        let li = document.createElement("li");
        li.textContent = listaAmigos[amigoSorteado];
        resultado.appendChild(li);
    } else {
        alert("Por favor, inserte al menos dos nombres.");
    }
}



