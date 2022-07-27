// imports the elements
const mainPage = document.querySelector('main');
const btnPlay = document.querySelector('#btnPlay');

// import the modules js
import GlobSort from "./globSort.js";
import Cards from "./cards.js";
import CreateCard from "./createCard.js";

// create glob the numbers
let globo1 = GlobSort(1, 75);

// create numbers the cards - (arr)
let card1 = Cards(globo1.getGlob());
let card2 = Cards(globo1.getGlob());
let card3 = Cards(globo1.getGlob());

// console.log(card3.getCards());

// create cards html - (arrNumberCards, elementForCreateHtml)
CreateCard(card1.getCards(), mainPage);
CreateCard(card2.getCards(), mainPage);
CreateCard(card3.getCards(), mainPage);

const numberTheCards = document.querySelectorAll('.numberCard');
numberTheCards.forEach((element) => {
    element.addEventListener('click', () => {
        const numberTheCard = element.dataset.card;
        card1.markNumbSort(numberTheCard, globo1.getSort())
    });
});