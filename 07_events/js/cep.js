// import the elements
let resulted = document.querySelector('#resulted');
let cep = document.querySelector('#cep');

cep.addEventListener('input', inputCep);
cep.addEventListener('keyup', keyupCep);

let control = 1;
cep.addEventListener('keydown', function (event) {

    if (event.keyCode == 8 && control == 1) {
        let digites = cep.value.slice(0, cont);
        cep.textContent = digites;
        control == 2
    }
});

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