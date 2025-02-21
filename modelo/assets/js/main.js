document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    // Verifica se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);

    let resultado = '';
    
    // Determina a categoria com base no IMC
    if (imc < 18.5) {
        resultado = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = 'Normal';
    } else if (imc >= 25 && imc < 29.9) {
        resultado = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        resultado = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        resultado = 'Obesidade grau 2';
    } else {
        resultado = 'Obesidade grau 3';
    }

    // Exibe o resultado no elemento com id "tresultado"
    document.getElementById('tresultado').textContent = `Seu IMC é ${imc.toFixed(2)}. Classificação: ${resultado}`;
});