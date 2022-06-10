const bombImg = document.querySelector('#bomb');
const explosion = document.querySelector('#audioExplosion');

function test() {
    explosion.play();
    bomb.src = 'img/explosao.png';
}

function stop() {
    clearTimeout(time);
    bomb.src = 'img/bombaApagada.png';
}

const time = setTimeout(test, 2000);

bomb.onclick = stop;

console.log('oi')