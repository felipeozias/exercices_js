// import the elements
const btnSort = document.querySelector('#btnSort');
const result = document.querySelector('#result');

// function raffle number
function calc() {

    // imports the elements 
    const valMin = parseFloat(document.querySelector('#valMin').value);
    const valMax = parseFloat(document.querySelector('#valMax').value);

    // condition the string or number
    if ((isNaN(valMin) === true) || (isNaN(valMax) === true)) {
        result.textContent = ('Os valores inseridos não são numéricos inteiros!');
    } else {
        if (valMin >= valMax) {
            result.textContent = 'O valor mínimo não é menor que o valor máximo!';

        } else {
            let aleatory = parseInt(Math.random() * (valMax - valMin) + valMin);
            result.textContent = aleatory;
        }
    }
}

btnSort.onclick = calc;