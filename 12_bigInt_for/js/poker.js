// import the elements
const btnPlay = document.querySelector('#btnPlayElement');
const imgResult = document.querySelector('#img');
const h2Result = document.querySelector('#result');

const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const orders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const naips = ['C', 'P', 'O', 'E'];
let cards = [];
let hand = [];

// create array the cards
for (let n1 = 0; n1 < values.length; n1++) {
    for (let n2 = 0; n2 < naips.length; n2++) {
        cards.push({ name: values[n1] + naips[n2], value: values[n1], naip: naips[n2], order: orders[n1] });
    }
}
// console.log(cards);

// event the click in button play
btnPlay.onclick = () => {

    if (cards.length < 5) {
        h2Result.textContent = 'As cartas acabaram, recarregue a página!';
        imgResult.innerHTML = '';
    } else {// raddon array the cards
        (randomArr(cards));
        function randomArr(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            cardsHand();
        }

        // play cards the hand
        function cardsHand() {
            hand = cards.splice(0, 5);
            // console.log(hand);

            hand.sort(function (a, b) { if (a.order < b.order) { return -1; } else { return 1; } });
            imgResult.innerHTML = '';

            for (let n = 0; n < 5; n++) {
                imgResult.innerHTML += `
            <img src="img/${hand[n].name}.svg" alt="img">`;
            }

            if (
                hand[0].naip == hand[1].naip &&
                hand[1].naip == hand[2].naip &&
                hand[2].naip == hand[3].naip &&
                hand[3].naip == hand[4].naip &&
                hand[4].order == hand[3].order + 1 &&
                hand[3].order == hand[2].order + 1 &&
                hand[2].order == hand[1].order + 1 &&
                hand[1].order == hand[0].order + 1

            ) {
                h2Result.textContent = 'Straight Flush';

            } else if ((
                hand[0].order == hand[1].order &&
                hand[1].order == hand[2].order &&
                hand[2].order == hand[3].order
            ) || (
                    hand[1].order == hand[2].order &&
                    hand[2].order == hand[3].order &&
                    hand[3].order == hand[4].order)
            ) {
                h2Result.textContent = 'Quadra';

            } else if ((
                hand[0].order == hand[1].order &&
                hand[1].order == hand[2].order &&
                hand[3].order == hand[4].order) || (
                    hand[0].order == hand[1].order &&
                    hand[2].order == hand[3].order &&
                    hand[3].order == hand[4].order)) {
                h2Result.textContent = 'Full House';

            } else if (
                hand[4].order == hand[3].order + 1 &&
                hand[3].order == hand[2].order + 1 &&
                hand[2].order == hand[1].order + 1 &&
                hand[1].order == hand[0].order + 1) {
                h2Result.textContent = 'Sequência';

            } else if ((
                hand[0].order == hand[1].order &&
                hand[1].order == hand[2]
            ) || (
                    hand[1].order == hand[2].order &&
                    hand[2].order == hand[3].order
                ) || (
                    hand[2].order == hand[3].order &&
                    hand[3].order == hand[4].order)) {
                h2Result.textContent = 'Trinca';

            } else if ((
                hand[0].order == hand[1].order &&
                hand[2].order == hand[3]
            ) || (
                    hand[0].order == hand[1].order &&
                    hand[3].order == hand[4].order
                ) || (
                    hand[1].order == hand[2].order &&
                    hand[3].order == hand[4].order)) {
                h2Result.textContent = 'Dois pares';

            } else if (
                hand[0].order == hand[1].order ||
                hand[1].order == hand[2].order ||
                hand[2].order == hand[3].order ||
                hand[3].order == hand[4].order) {
                h2Result.textContent = 'Par';

            } else {
                h2Result.textContent = 'Nada';
            }
        }
    }
};