const btn_calc = document.querySelector('#btn_calc');
const result = document.querySelector('#result');


function calc() {
    let imc;

    const peso = parseFloat(document.querySelector('#peso').value.replace(',', '.'));
    const altura = parseFloat(document.querySelector('#altura').value.replace(',', '.'));


    if ((isNaN(peso) === true) || (isNaN(altura) === true)) {
        result.textContent = ('Os valores inseridos não são válidos!');
    } else {
        imc = peso / (altura ** 2);
        let cassificao;

        if (imc < 18.5) {
            cassificao = 'abaixo do peso';

        } else if (imc >= 18.5 && imc < 25) {
            cassificao = 'com o peso normal';
        } else if (imc >= 25 && imc < 30) {
            cassificao = 'acima do peso desejado (Sobrepeso)';
        } else if (imc > 30) {
            cassificao = 'obeso';
        }


        result.textContent = `Seu IMC é: ${(imc).toFixed(2)} e você está ${cassificao}!`;

    }



    // os valores inseridos não são válidos

    // console.log(typeof(peso));
    // console.log(peso + altura);
}


btn_calc.onclick = calc;