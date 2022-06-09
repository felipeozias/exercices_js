// import the elements
const btnSort = document.querySelector('#btnCalc');
const result = document.querySelector('#result');

// function smaller and larger number
function calc() {

    const number = document.querySelector('#numberInt').value;
    let resulted;

    // condition the number
    switch (number) {
        case '1': resulted = 'Um'; break;
        case '2': resulted = 'Dois'; break;
        case '3': resulted = 'Três'; break;
        case '4': resulted = 'Quatro'; break;
        case '5': resulted = 'Cinco'; break;
        case '6': resulted = 'Seis'; break;
        case '7': resulted = 'Sete'; break;
        case '8': resulted = 'Oito'; break;
        case '9': resulted = 'Nove'; break;
        case '10': resulted = 'Dez'; break;
        default: resulted = 'Digite um valor válido!';
    }
    result.textContent = resulted;
}

btnSort.onclick = calc;