const btnBomb = document.querySelector('#btnBomb');
const bombImg = document.querySelector('#bomb');
const audioExplosion = document.querySelector('#audioExplosion');

let time;

function setTime() {
    time = setTimeout(explosion, 2000);
    bomb.src = 'img/bomba.png';
    btnBomb.style.backgroundColor = "#37be42";
    btnBomb.style.borderColor = "#37be42";
}

function explosion() {
    audioExplosion.play();
    bomb.src = 'img/explosao.png';
    btnBomb.textContent = 'Reativar bomba';
}

function stop() {
    clearTimeout(time);
    bomb.src = 'img/bombaApagada.png';
}

btnBomb.onclick = setTime;
bomb.onclick = stop;