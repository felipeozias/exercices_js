// imports the elements
const btnBomb = document.querySelector('#btnBomb');
const bombImg = document.querySelector('#bomb');
const audioExplosion = document.querySelector('#audioExplosion');
const audioTick = document.querySelector('#audioTick');

let timeExplosion = 60;
let stateTheBomb = 1; // 1 == armed bomb; 2 == disarmed bomb

btnBomb.onclick = startTime;
bombImg.onclick = stop;

let time;

// functions
function startTime() {

    if (stateTheBomb == 1) {

        stateTheBomb = 2;
        time = setInterval(tick, 1000);
        btnBomb.style.backgroundColor = "green";
        document.querySelector('span').innerHTML = "BOMBA <br/> ARMADA";
        timeExplosion = 60;
        document.querySelector('h1').textContent = `00:00:${timeExplosion}`;
        bombImg.src = 'img/bomba.png';
    }
}

function tick() {

    if (timeExplosion <= 0) {

        audioExplosion.play();
        bombImg.src = 'img/explosao.png';
        document.querySelector('span').innerHTML = "REARMAR <br/> BOMBA";
        clearInterval(time);
        document.querySelector('h1').textContent = '';
        stateTheBomb = 1;
    } else {

        audioTick.play();
        timeExplosion--;
        document.querySelector('h1').textContent = `00:00:${timeExplosion}`;
    }
}

function stop() {

    clearInterval(time);
    btnBomb.style.backgroundColor = "#bc0000";
    document.querySelector('span').innerHTML = "ARMAR <br/> BOMBA";
    stateTheBomb = 1;
    bombImg.src = 'img/bombaApagada.png';
}