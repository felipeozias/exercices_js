// import the elements
const btn_sort = document.querySelector('#btn_calc');
const result = document.querySelector('#result');

// function raffle number
function calc() {

    // imports the elements 
    const val_min = parseInt(document.querySelector('#val_min').value);
    const val_max = parseInt(document.querySelector('#val_max').value);

    // condition the string or number
    if ((isNaN(val_min) === true) || (isNaN(val_max) === true)) {
        result.textContent = ('Os valores inseridos não são numéricos inteiros!');
    } else {
        if (val_min >= val_max) {
            result.textContent = 'O valor mínimo não é menor que o valor máximo!';

        } else {
            let aleatory = parseInt(Math.random() * (val_max - val_min) + val_min);
            result.textContent = aleatory;
        }
    }
}

btn_sort.onclick = calc;