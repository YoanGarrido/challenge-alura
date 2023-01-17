var escrito = document.querySelector("#texto-area")
var resultante = document.querySelector("#mensajeResultado")

function encriptar(){
    var texto = escrito.value;

    var resultadoEncriptado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("mensajeResultado").innerHTML = resultadoEncriptado 

}

function desencriptar(){
    var texto = escrito.value;
    var resultadoDesencriptar = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("mensajeResultado").innerHTML = resultadoDesencriptar
}
function copiar(){
    var textocopiar = document.getElementById("mensajeResultado");

    textocopiar.select();
    textocopiar.setSelectionRange(0, 99999);
    document.execCommand('copy')

}