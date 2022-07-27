let coutnCard = 1;
// function for create cards thml
export default function CreateCard(card, element) {
    let labelHtml = document.createElement('label');
    labelHtml.textContent = `Cartela ${coutnCard}`;
    element.appendChild(labelHtml);
    let divCard = document.createElement('div');
    divCard.classList.add('card');
    element.appendChild(divCard);

    for (let n = 0; n < card.length; n++) {
        let numberH2 = document.createElement('h2');
        numberH2.textContent = `${card[n]}`;
        numberH2.dataset.card = coutnCard;

        numberH2.classList.add('numberCard');
        divCard.appendChild(numberH2);
    };
    coutnCard++;
};