// import the elements
const btn_sort = document.querySelector('#btn_sort');
const result = document.querySelector('#result');

// function Census (IBGE)
function calc() {

    let genre;
    let age_group;

    // condition the genre
    let aleatory = Math.random();
    if (aleatory <= 0.517) {
        genre = "Mulher";

    } else {
        genre = "Homem";
    }

    // conditon the age_group
    aleatory = Math.random();
    if (aleatory <= 0.167) {
        age_group = "idoso (a)";

    } else {
        age_group = "não idoso (a)";
    }

    result.textContent = `O resultado do sorteio conforme censo IBGE é: ${genre} ${age_group}!`;
}

btn_sort.onclick = calc;