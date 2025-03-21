const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(peso, altura);

    if (!peso) {
        setResultado("Peso inválido!", false);
        return;
    }
    if (!altura) {
        setResultado("Altura inválida!", false);
        return;
    }

    const imc = getImc (peso, altura);
    const getImc = nivelImc (imc);
    
    const msg = `Seu imc é ${imc}, (${nivelImc})`;
    setResultado(msg, true);
});

function nivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return imc[5];
    } else if (imc >= 34.9) {
        return imc[4];
    } else if (imc >= 29.9) {
        return imc[3];
    } else if (imc >= 24.9) {
        return imc[2];
    } else if (imc >= 18.5) {
        return imc[1];
    } else if (imc < 18.5) {
        return imc[0];
    }
  
}

function getImc (altura, peso) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP (){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid){
    const resultado = document.querySelector("#tresultado");
    resultado.innerHTML = '';
    
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}

criaP();
setResultado();
nivelImc();