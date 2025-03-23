const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(peso, altura);

    if (!peso) {
        setResultado("Peso inválido!");
        return;
    }
    if (!altura) {
        setResultado("Altura inválida!");
        return;
    }

    const imc = getImc (altura, peso);
    const nivelImc = getNivelImc (imc);
    
    const msg = `Seu imc é ${imc}, (${nivelImc})`;
    setResultado(msg);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    } else if (imc >= 34.9) {
        return nivel[4];
    } else if (imc >= 29.9) {
        return nivel[3];
    } else if (imc >= 24.9) {
        return nivel[2];
    } else if (imc >= 18.5) {
        return nivel[1];
    } else if (imc < 18.5) {
        return nivel[0];
    }
  
}

function getImc (altura, peso) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg){
    const resultado = document.querySelector("#tresultado");
    resultado.innerHTML = '';
    
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}

