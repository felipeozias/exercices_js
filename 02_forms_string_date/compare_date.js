// import the elements
const btn_verific = document.querySelector('#btn_verific');
let resulted = document.querySelector('#result');
let input_genre = document.querySelectorAll('input[name="genre"]');;

// Time the life (IBGE)
const time_the_life_masculine = (71.1) * 365 * 24 * 60 * 60 * 1000; // in miliseconds
const time_the_life_feminine = (80.1) * 365 * 24 * 60 * 60 * 1000; // in miliseconds

let date_current = new Date();

function calc() {
    // date the birth
    let day_birth = (document.querySelector('#day')).value;
    let month_birth = (document.querySelector('#month')).value;
    let year_birth = (document.querySelector('#year')).value;
    let date_birth = new Date(year_birth, (month_birth - 1), day_birth);

    // sex the user
    let sex;
    for (let i = 0; i < input_genre.length; i++) {
        if (input_genre[i].checked == true) {
            sex = input_genre[i].value;
        }
    }

    // calculating the time de life
    let diference_the_date;
    if (sex == 'M') {
        diference_the_date = (date_birth.getTime() - date_current.getTime() + time_the_life_masculine); // in miliseconds
        diference_in_days = Math.ceil(diference_the_date / 1000 / 60 / 60 / 24);
        resulted.textContent = `Você ainda tem ${diference_in_days} dias de vida, aproveite!`;

    } else if (sex == 'F') {
        diference_the_date = (date_birth.getTime() - date_current.getTime() + time_the_life_feminine); // in miliseconds
        diference_in_days = Math.ceil(diference_the_date / 1000 / 60 / 60 / 24);
        resulted.textContent = `Você ainda tem ${diference_in_days} dias de vida, aproveite!`;

    } else {
        resulted.textContent = 'Preencha todos os campos!';
    }
}

btn_verific.onclick = calc;