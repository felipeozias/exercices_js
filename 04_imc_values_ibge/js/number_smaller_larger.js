// import the elements
const btnSort = document.querySelector('#btnCalc');
const result = document.querySelector('#result');

// function smaller and larger number
function calc() {

    const number = parseFloat(document.querySelector('#numberFloat').value.replace(',', '.'));

    // condition the string or number
    if (isNaN(number) === true) {
        result.textContent = ('O valor inserido não é numérico!');

    } else {
        const smaller = Math.floor(number);
        const larger = Math.ceil(number);

        result.textContent = `O menor número inteiro é ${smaller} e o maior número inteiro é ${larger}`;
    }
}

btnSort.onclick = calc;