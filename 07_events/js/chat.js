// import the elements
let resulted = document.querySelector('#resulted');
let cep = document.querySelector('#cep');

cep.addEventListener('input', inputCep);
cep.addEventListener('keyup', keyupCep);
let evento = cep.addEventListener('keyCode', kedownCep);

function inputCep() {
    if (isNaN(cep.value)) {
        cep.value = cep.value.slice(0, -1);
    }
}

function keyupCep() {
    if (cep.value.length >= 9) {
        let cont = cep.value.length - (cep.value.length - 8);
        cep.value = cep.value.slice(0, cont);
    }
}

function kedownCep() {
    console.log(evento);
}