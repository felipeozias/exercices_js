// import the elements
const containerCells = document.querySelectorAll('.elemento'); // div[data-box="container"]
const h2Result = document.querySelector('h2[data-box="result"]');
const btnRestart = document.querySelector('input[data-box="restart"]');

let cells = [['', '', ''], ['', '', ''], ['', '', '']]
let player = 'X';
let endGame = false;

// event the click
for (let n = 0; n < containerCells.length; n++) {
    containerCells[n].addEventListener('click', clickCell);
}

// functon for check cell
function clickCell(e) {
    const line = e.target.dataset.line;
    const colun = e.target.dataset.colun;

    if (cells[line][colun] == '' && endGame == false) {

        cells[line][colun] = `${player}`;
        e.target.textContent = `${player}`;
        wonPlayer();
        if (player == 'X') { player = 'O' } else { player = 'X' }
    }
}

// function for check won player
function wonPlayer() {

    // verificad won player
    if (
        (cells[0][0] == player &&
            cells[0][1] == player &&
            cells[0][2] == player) ||

        (cells[1][0] == player &&
            cells[1][1] == player &&
            cells[1][2] == player) ||

        (cells[2][0] == player &&
            cells[2][1] == player &&
            cells[2][2] == player) ||

        (cells[0][0] == player &&
            cells[1][0] == player &&
            cells[2][0] == player) ||

        (cells[0][1] == player &&
            cells[1][1] == player &&
            cells[2][1] == player) ||

        (cells[0][2] == player &&
            cells[1][2] == player &&
            cells[2][2] == player) ||

        (cells[0][0] == player &&
            cells[1][1] == player &&
            cells[2][2] == player) ||

        (cells[0][2] == player &&
            cells[1][1] == player &&
            cells[2][0] == player)
    ) {
        endGame = true;
        h2Result.textContent = `O vencedor da partida foi o jogado ${player}!`;
        btnRestart.style.display = 'block';
    } else {
        // verified tie
        let cont = 0;
        for (let n1 = 0; n1 < 3; n1++) {
            for (let n2 = 0; n2 < 3; n2++) {
                if (cells[n1][n2] != '') { cont++; }
            }
        }
        if (cont == 9) {
            endGame = true;
            h2Result.textContent = `A partida empatou!`;
            btnRestart.style.display = 'block';
        }
    }
}

// restart game
btnRestart.addEventListener('click', (e) => {

    for (let n = 0; n < containerCells.length; n++) {
        containerCells[n].textContent = '';
    }

    endGame = false;
    player = 'X';
    cells = [['', '', ''], ['', '', ''], ['', '', '']];
    h2Result.textContent = ``;
    btnRestart.style.display = 'none';
});