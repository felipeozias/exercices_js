// imports the elements
const btn_calc = document.querySelector('#btn_calc');
let result = document.querySelector('#result');

function calc() {
    // imports the elements
    let number1 = parseFloat(document.querySelector('#number1').value);
    let number2 = parseFloat(document.querySelector('#number2').value);
    let operation = document.querySelector('#select_operation').value;

    // test the condition
    if (operation == 'sum') {
        result.textContent = number1 + number2;

    } else if (operation == 'subtraction') {
        result.textContent = number1 - number2;

    } else if (operation == 'multiplication') {
        result.textContent = number1 * number2;

    } else if (operation == 'division') {
        result.textContent = number1 / number2;

    }
}

btn_calc.onclick = calc;