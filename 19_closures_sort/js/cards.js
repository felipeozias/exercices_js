// function for create cards
export default function Cards(arr) {
    let card = [];
    let count = 0;

    function createCard() {
        arr.sort(() => Math.random() - 0.5);
        card = arr.slice(0, 10);
        console.log(card);
        console.log(card.join());
    }

    function getCards() {
        return card;
    };

    function markNumbSort(numberTheCard, arrSorteado) {
        // if( && ){}
        console.log(numberTheCard);
        console.log(arrSorteado);
        count++;
    };

    function checkNumbSort() {
        if (count > 10) { };
    };

    createCard();

    return { getCards, markNumbSort, checkNumbSort };
}