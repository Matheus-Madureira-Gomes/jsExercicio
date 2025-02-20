function meuEscopo (){
    const form = document.querySelector('#txtform'); 
    form.addEventListener("submit", function (e) {
            e.preventDefault();
        });


    const txtresultado = document.querySelector("#txtresultado");
    const peso = document.querySelector("#txtpeso");
    const altura = document.querySelector("#txtaltura");
    const num1 = Number(peso);
    const num2 = parseInt(altura);

    const imc = num1 / (altura * altura);

    if (imc <= 18,5){
        document.innerHTML += `<p> Imc igual a ${+imc}. Peso abaixo do normal </p>`
    } else if (imc > 18,5 && imc <= 24,9){
        document.innerHTML += `<p> Imc igual a ${+imc}. Peso normal </p>`
    } else if (imc >= 25 && imc <= 29,9){
        document.innerHTML += `<p> Imc igual a ${+imc}. Em sobrepeso </p>`
    } else if (imc >= 30 && imc <= 34,9){
        document.innerHTML += `<p> Imc igual a ${+imc}. Obesidade grau 1 </p>`
    } else if (imc >= 35 && imc <= 39,9){
        document.innerHTML += `<p> Imc igual a ${+imc}. Obesidade grau 2 </p>`
    } else if (imc >= 40){
        document.innerHTML += `<p> Imc igual a ${+imc}. Obesidade grau 3 </p>`
    } else {
        document.innerHTML += `<p> valor inválido </p>`
    }

};
meuEscopo();