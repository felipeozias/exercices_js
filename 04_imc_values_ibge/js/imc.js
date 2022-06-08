// import the elements
const btnCalc = document.querySelector('#btnCalc');
const result = document.querySelector('#result');

// function calc the IMC
function calc() {
    let imc;

    // import the elements
    const Weight = parseFloat(document.querySelector('#Weight').value.replace(',', '.'));
    const height = parseFloat(document.querySelector('#height').value.replace(',', '.'));

    // condition the string or number
    if ((isNaN(Weight) === true) || (isNaN(height) === true)) {
        result.textContent = ('Os valores inseridos não são válidos!');
    } else {
        imc = Weight / (height ** 2);
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
}

btnCalc.onclick = calc;