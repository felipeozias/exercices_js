// import the elements
const btnPrint = document.querySelector('#btnPrint');
const result = document.querySelector('#result');

// function smaller and larger number
function print() {

    const date = new Date(document.querySelector('#date').value);

    if (isNaN(date)) {
        result.textContent = 'Selecione uma data!';
    } else {

        let weekDay = date.getUTCDay();
        let month = date.getUTCMonth();

        switch (weekDay) {
            case 0: weekDay = 'Domingo'; break;
            case 1: weekDay = 'Segunda'; break;
            case 2: weekDay = 'Terça'; break;
            case 3: weekDay = 'Quarta'; break;
            case 4: weekDay = 'Quinta'; break;
            case 5: weekDay = 'Sexta'; break;
            case 6: weekDay = 'Sábado'; break;
        }

        switch (month) {
            case 0: month = 'Janeiro'; break;
            case 1: month = 'Fevereiro'; break;
            case 2: month = 'Março'; break;
            case 3: month = 'Abril'; break;
            case 4: month = 'Maio'; break;
            case 5: month = 'Junho'; break;
            case 6: month = 'Julho'; break;
            case 7: month = 'Agosto'; break;
            case 8: month = 'Setembro'; break;
            case 9: month = 'Outubro'; break;
            case 10: month = 'Novembro'; break;
            case 11: month = 'Dezembro'; break;
        }

        result.innerHTML = `
        Dia: ${date.getUTCDate()} <br/>
        Mês: ${date.getUTCMonth() + 1} <br/>
        Ano: ${date.getUTCFullYear()} <br/>
        Dia da semana: ${weekDay} <br/>
        Mês: ${month} <br/>
        Data em ms: ${date.getTime()} <br/>
        `;
    }
}

btnPrint.onclick = print;