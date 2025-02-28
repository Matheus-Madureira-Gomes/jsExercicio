const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("Evento previnido")
});

function setResultado (msg){
    const resultado = querySelector("#tresultado");
    resultado.innerHTML = '';

    const p = document.createElement('p');
}