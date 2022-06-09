// import the elements
const btnSort = document.querySelector('#btnSort');
const result = document.querySelector('#result');

// function raffle number
function calc() {

    // imports the elements 
    const valMin = Number(document.querySelector('#valMin').value.replace(',','.'));
    const valMax = Number(document.querySelector('#valMax').value.replace(',','.'));

    // condition the string or number
    if (((isNaN(valMin) === true) || (isNaN(valMax) === true))) {
        result.textContent = ('Os valores inseridos não são numéricos!');

    } else if ((!Number.isInteger(valMin) || !Number.isInteger(valMax))) {
        result.textContent = ('Os valores inseridos não são inteiros!');

    } else if (valMin >= valMax) {
        result.textContent = 'O valor mínimo não é menor que o valor máximo!';

    } else {
        let aleatory = parseInt(Math.random() * (valMax + 1 - valMin) + valMin);
        result.textContent = aleatory;
    }

}

btnSort.onclick = calc;