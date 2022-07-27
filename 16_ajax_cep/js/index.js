// import the elements
const btnConsult = document.querySelector('#consultBtn');
const btnPrintMaps = document.querySelector('#printMaps');
const resulted = document.querySelector('#result');
const maps = document.querySelector('iframe');
let cepInput = document.querySelector('#inputCep');

// verificacion of CEP
cepInput.addEventListener('input', (e) => {
    e.target.value = `${e.target.value.trim()}`

    if ((e.target.value).length > 9) {
        e.target.value = cepInput.value.slice(0, 9);
    }

    if (e.target.value.length == 5) {
        e.target.value += '-';
    }
});

// realizacion the consult CEP
btnConsult.addEventListener('click', () => {
    fetch(`https://cep.awesomeapi.com.br/json/${cepInput.value}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);

            if (typeof (data.address) !== 'undefined') {
                resulted.innerHTML = `${data.address} <br/> Bairro: ${data.district} <br/> Cidade: ${data.city} <br/> Estado:  ${data.state} <br/> Latitude: ${data.lat} <br/> Longitude: ${data.lng}`;

                maps.src = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63572.34746482419!2d${data.lng}!3d${data.lat}00000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sbr!4v1657243637625!5m2!1spt-PT!2sbr`;

                btnPrintMaps.style.display = `block`;
            } else { resulted.innerHTML = `Digite um CEP válido!` }
        })
        .catch((erro) => {
            console.log('CEP inválido!');
        })
});

btnPrintMaps.addEventListener('click', () => {
    maps.style.display = `block`;
});
















































// btnConsult.addEventListener('click', () => {
//     console.log('teste');
//     const cep = Number(document.querySelector('#inputCep'));
//     fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
//         .then((resp) => {
//             console.log(resp);
//             let data = resp.json();
//             return data;
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((err) => {
//             console.log('Erro na consulta, tente novamente!');
//         })
// });