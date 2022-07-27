// imports the elements
const mainPage = document.querySelector('main');

let idDoBaralho;

// function the deck of API
async function baralho() {

    try {
        const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');

        if (res.status != 200) {
            throw 'Erro na requisição da API!';
        }

        const dados = await res.json();
        idDoBaralho = dados.deck_id;

    } catch (err) {
        return Promise.reject(err);
    };
}

// function the carts of API
async function carta() {

    try {
        await baralho();

        // create the div for images
        const divCarts = document.createElement('div');
        divCarts.id = 'divCarts';
        mainPage.appendChild(divCarts);

        for (let n = 0; n < 5; n++) {

            const res = await fetch(`https://deckofcardsapi.com/api/deck/${idDoBaralho}/draw/?count=1`)
            const dados = await res.json();

            console.log(dados);

            const imageCart = document.createElement('img');
            imageCart.src = dados.cards[0].image;
            divCarts.appendChild(imageCart);
        };

    } catch (err) {
        console.log(err);
    }
}

carta();