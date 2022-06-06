const btn_compare = document.querySelector('#btn_compare');
var h2_result = document.querySelector('#result');

function calc() {

    var number1 = (document.querySelector('#number1')).value;
    var number2 = (document.querySelector('#number2')).value;
    var resultado;

    if (number1 > number2) {
        resultado = 'O primeiro número é maior que o segundo!';
    } else if (number1 < number2) {
        resultado = 'O primeiro número é menor que o segundo!';
    } else if (number1 == number2) {
        resultado = 'O primeiro número é igual ao segundo!';
    }

    h2_result.textContent = resultado;
}

btn_compare.onclick = calc;
