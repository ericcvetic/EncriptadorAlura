const texto = document.querySelector(".ingresado");
const btnEncriptar = document.querySelector(".boton1");
const btnDesencriptar = document.querySelector(".boton2");
const resultado = document.querySelector(".resultado");
const boxmuñe = document.querySelector(".muñeco");
const boxp = document.querySelector(".pbox")
const btnCopiar = document.querySelector(".copiar");


btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copy)


function encriptar() {
    if (texto.value === texto.value.toLowerCase()) {
        let nuevoTexto = texto.value.trimStart()
        nuevoTexto = nuevoTexto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');


        resultado.innerHTML = nuevoTexto;
        resultado.style.fontWeight = "400";
        boxmuñe.style.display = "none";
        boxp.style.display = "none";

        texto.value = ""
        btnCopiar.style.display = "unset";


        if (nuevoTexto.length === 0) {
            resultado.innerHTML = 'Ningún mensaje fue encontrado';
            boxmuñe.style.display = "";
            boxp.style.display = "";
            btnCopiar.style.display = "";
            resultado.style.fontWeight = "";
        }


    } else {
        alert("Solamente podes meter minusculas!")
        texto.value = "";
    }




}

function desencriptar() {
    if (texto.value === texto.value.toLowerCase()) {

        let nuevoTexto2 = texto.value.trimStart()
        nuevoTexto2 = nuevoTexto2
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');


        resultado.innerHTML = nuevoTexto2;
        resultado.style.fontWeight = "400";
        boxmuñe.style.display = "none";
        boxp.style.display = "none";

        texto.value = ""

        if (nuevoTexto2.length === 0) {
            resultado.innerHTML = 'Ningún mensaje fue encontrado';
            boxmuñe.style.display = "";
            boxp.style.display = "";
            btnCopiar.style.display = "";
            resultado.style.fontWeight = "";
        }
    } else {
        alert("Solamente podes meter minusculas!")
        texto.value = "";
    }

}

function copy() {

    navigator.clipboard.writeText(resultado.innerHTML);

}

