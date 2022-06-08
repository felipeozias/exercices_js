// import the elements
const btnSort = document.querySelector('#btnSort');
const result = document.querySelector('#result');

// function Census (IBGE)
function calc() {

    let genre;
    let ageGroup;

    // condition the genre
    let aleatory = Math.random();
    if (aleatory <= 0.517) {
        genre = "Mulher";

    } else {
        genre = "Homem";
    }

    // conditon the ageGroup
    aleatory = Math.random();
    if (aleatory <= 0.167) {
        ageGroup = "idoso (a)";

    } else {
        ageGroup = "não idoso (a)";
    }

    result.textContent = `O resultado do sorteio conforme censo IBGE é: ${genre} ${ageGroup}!`;
}

btnSort.onclick = calc;