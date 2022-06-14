// import the elements
const listTheCars = document.querySelector('#listTheCars');
const description = document.querySelector('#description');
const image = document.querySelector('#image');

listTheCars.addEventListener('change', listar);

function listar() {
    switch (listTheCars.value) {
        case '1':
            image.src = 'img/1GolfGti2008.jpg';

            description.innerHTML =
                '<strong>Descrição: <br/> Nome:</strong> Golf GTI 2008 <br/>  <strong>Fabricante:</strong> Volkswagen <br/> <strong>Preço:</strong> R$ 52.000 <br/> <strong>Vel. Máxima:</strong> 231 km/h <br/> <strong>Tempo de 0 a 100km:</strong> 7.5s <br/> <strong>Potência:</strong> 193cv';
            break;

        case '2':
            image.src = 'img/2Tiguan.jpg';

            description.innerHTML =
                '<strong>Descrição: <br/> Nome:</strong> Tiguan <br/>  <strong>Fabricante:</strong> Volkswagen <br/> <strong>Preço:</strong> R$ R$ 52.700 <br/> <strong>Vel. Máxima:</strong> 207 km/h <br/> <strong>Tempo de 0 a 100km:</strong> 8.5s <br/> <strong>Potência:</strong> 200cv';
            break;
        case '3':
            image.src = 'img/3Volvo.jpg';

            description.innerHTML =
                '<strong>Descrição: <br/> Nome:</strong> Volvo C30 <br/>  <strong>Fabricante:</strong> Volvo <br/> <strong>Preço:</strong> R$ 49.000 <br/> <strong>Vel. Máxima:</strong> 235 km/h <br/> <strong>Tempo de 0 a 100km:</strong> 7.1s <br/> <strong>Potência:</strong> 220cv';
            break;
        case '4':
            image.src = 'img/4Sandero.jpg';

            description.innerHTML =
                '<strong>Descrição: <br/> Nome:</strong> Sandero <br/>  <strong>Fabricante:</strong> Renault <br/> <strong>Preço:</strong> R$ 49.900 <br/> <strong>Vel. Máxima:</strong> 231 km/h <br/> <strong>Tempo de 0 a 100km:</strong> 8s <br/> <strong>Potência:</strong> 202cv';
            break;
        case '5':
            image.src = 'img/5Wrx.jpg';

            description.innerHTML =
                '<strong>Descrição: <br/> Nome:</strong> WRX 2.5 <br/>  <strong>Fabricante:</strong> Subaru <br/> <strong>Preço:</strong> R$ 46.900 <br/> <strong>Vel. Máxima:</strong> 230 km/h <br/> <strong>Tempo de 0 a 100km:</strong> 5.9s <br/> <strong>Potência:</strong> 193cv';
            break;

        default:
            image.src = '';
            description.innerHTML = 'Escola um carro!';
            break;
    }
}