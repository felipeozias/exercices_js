// imports the elements
const mainPage = document.querySelector('main');
let selectstate;
let selectCity;


// functtoin the return the promise states
function statesPromise() {
    let arrStates = [];

    return new Promise((resolve, reject) => {

        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
            .then((res) => {
                if (res.status == 200) {
                    return res.json();
                } else { return Promise.reject('Erro de consulta na API!') };
            })
            .then((data) => {

                for (let n = 0; n < data.length; n++) {
                    arrStates.push({ nome: data[n].nome, sigla: data[n].sigla });
                }

                resolve(arrStates);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

statesPromise().then((data) => {
    // console.log(data);
    // console.log(data.length);

    const newSelectState = document.createElement('select');
    newSelectState.id = 'stateSelect';
    mainPage.appendChild(newSelectState);

    const opt1 = document.createElement('Option');
    opt1.disabled = "disabled";
    opt1.selected = 'selected';
    opt1.textContent = 'Selecione o estado';
    newSelectState.appendChild(opt1);

    data.forEach((element) => {

        const opt = document.createElement('Option');
        opt.textContent = element.nome;
        opt.value = element.sigla;
        newSelectState.appendChild(opt);
    });

    selectstate = document.querySelector('#stateSelect');

    selectstate.addEventListener('input', selectTheCities);

}).catch((err) => {
    console.log(err);
});


// -------------------------------------------------------


// functtoin the return the promise cyties
function citiesPromise() {
    let arrCities = [];

    return new Promise((resolve, reject) => {

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectstate.value}/municipios`)
            .then((res) => {
                if (res.status == 200) {
                    return res.json();
                } else { return Promise.reject('Erro de consulta na API!') };
            })
            .then((data) => {

                for (let n = 0; n < data.length; n++) {
                    arrCities.push({ nome: data[n].nome, id: data[n].id });
                }
                resolve(arrCities);
            })
            .catch((err) => {
                reject(err);
            });

    });
};

function selectTheCities() {
    citiesPromise().then((data) => {
        // console.log(data);

        if (!document.querySelector('#citySelect')) {
            newSelectCity = document.createElement('select');
            newSelectCity.id = 'citySelect';
            mainPage.appendChild(newSelectCity);
        }
        selectCity = document.querySelector('#citySelect');
        selectCity.innerHTML = '';

        const opt2 = document.createElement('Option');
        opt2.disabled = "disabled";
        opt2.selected = 'selected';
        opt2.textContent = 'Selecione a cidade';
        selectCity.appendChild(opt2);

        data.forEach(element => {
            const opt = document.createElement('Option');
            opt.textContent = element.nome;
            opt.value = element.id;
            selectCity.appendChild(opt);
        });

        selectCity.addEventListener('input', previsionTemp)
    })
}


// -------------------------------------------------------


// functtoin the return the promise temp
function tempPromise() {
    let arrTemp = [];

    return new Promise((resolve, reject) => {

        fetch(`https://apiprevmet3.inmet.gov.br/previsao/${selectCity.value}`)
            .then((res) => {
                if (res.status == 200) {
                    return res.json();
                } else { return Promise.reject('Erro de consulta na API!') };
            })
            .then((data) => {
                // console.log(data); // -------- DADOS COMPLETOS

                days = data[`${(Object.keys(data))[0]}`]; // -------- DIAS DE PREVISÃO
                console.log(days);


                for (let n = 0; n < 2; n++) {
                    const day0 = Object.keys(days)[0];
                    console.log(`${day0}`); // -------- DATA
                    console.log(days[day0].manha.dia_semana);// -------- DIA DA SEMANA  
                    console.log(days[day0].manha.icone);// -------- ICONE
                    console.log(days[day0].manha.resumo);// -------- RESUMO
                    console.log(days[day0].manha.temp_min);// -------- TEMP MIN
                    console.log(days[day0].manha.temp_max);// -------- TEMP MAX
                }


                const day1 = Object.keys(days)[1];
                console.log(day1); // -------- DATA
                console.log(days[day1].manha.dia_semana);// -------- DIA DA SEMANA  
                console.log(days[day1].manha.icone);// -------- ICONE
                console.log(days[day1].manha.resumo);// -------- RESUMO
                console.log(days[day1].manha.temp_min);// -------- TEMP MIN
                console.log(days[day1].manha.temp_max);// -------- TEMP MAX

                const day2 = Object.keys(days)[2];
                console.log(day2); // -------- DATA
                console.log(days[day2].dia_semana);// -------- DIA DA SEMANA  
                console.log(days[day2].icone);// -------- ICONE
                console.log(days[day2].resumo);// -------- RESUMO
                console.log(days[day2].temp_min);// -------- TEMP MIN
                console.log(days[day2].temp_max);// -------- TEMP MAX

                const day3 = Object.keys(days)[3];
                console.log(day3); // -------- DATA
                console.log(days[day3].dia_semana);// -------- DIA DA SEMANA  
                console.log(days[day3].icone);// -------- ICONE
                console.log(days[day3].resumo);// -------- RESUMO
                console.log(days[day3].temp_min);// -------- TEMP MIN
                console.log(days[day3].temp_max);// -------- TEMP MAX
                resolve(arrTemp);

            })
            .catch((err) => {
                reject(err);
            });

    });
};

function previsionTemp() {
    tempPromise();
};