// import the elements the index.html
const btnConsult = document.querySelector('#consultBtn');
const bodyDocument = document.querySelector('body');
const ResultContacion = document.querySelector('#cotacionResult');


btnConsult.addEventListener('click', () => {

    // import the elements the index.html
    const coinSelected = document.querySelector('#selectCoin').value;
    const dateInitial = new Date(document.querySelector('#dateInitial').value);
    const dateEnd = new Date(document.querySelector('#dateEnd').value);

    // Construction the line one the table
    const table = document.querySelector('table');
    table.innerHTML = `
        <tr>
            <th>Data e hora</th>
            <th>V.Mín</th>
            <th>V.Máx</th>
            <th>Fechamento</th>
        </tr>`;

    // Print cotaciont the coin selected
    fetch(`https://economia.awesomeapi.com.br/last/${coinSelected}-BRL`)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {

            const valueCotacion = data[`${coinSelected}BRL`].bid;
            let dateCotacion = (data[`${coinSelected}BRL`].create_date);
            ResultContacion.innerHTML = `Cotação: R$ ${valueCotacion} <br/> Data/hora: ${dateCotacion}`;
        })
        .catch((err) => {
            console.log('Error, tente outra data!');
        });


    // check interval the day of date
    const timeDiff = Math.abs(dateEnd.getTime() - dateInitial.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let dateOperation = dateInitial;
    dateOperation.setDate(dateOperation.getDate() + 1)

    for (let index = 0; index <= diffDays; index++) {

        // creation date location
        const dateForApi = dateOperation.toLocaleDateString();
        const year = dateForApi.substring(6, 10);
        const mouth = dateForApi.substring(3, 5);
        const day = dateForApi.substring(0, 2);


        fetch(`https://economia.awesomeapi.com.br/json/daily/${coinSelected}-BRL/?start_date=${year + mouth + day}&end_date=${year + mouth + day}`)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {

                table.innerHTML += `
                <tr>
                    <td>${dateForApi + ' ' + data[0].create_date.substring(11, 16)}</td>
                    <td>R$ ${data[0].low}</th>
                    <td>R$ ${data[0].high}</td>
                    <td>R$ ${data[0].bid}</td>
                </tr>`;
            })
            .catch((err) => {
                console.log('Error, tente outra data!');
            });
        dateOperation.setDate(dateOperation.getDate() + 1)
    }
});