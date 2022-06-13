// imports the elements
const btnStart = document.querySelector('#btnStart');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const display = document.querySelector('h1');
const audioAlarm = document.querySelector('#audioAlarm');

let stateTime = 1; //stateTime==1: initial; stateTime==2: couting

// for generator options the selects
for (let i = 0; i < 60; i++) {
    let optionMinutes = document.createElement('option');
    let optionSeconds = document.createElement('option');
    optionMinutes.text = i;
    optionSeconds.text = i;
    minutes.add(optionMinutes);
    seconds.add(optionSeconds);
}

let setInterval1;

function startTime() {

    if (stateTime == 1) {

        let timeSeconds = Number(seconds.value);
        let timeMinutes = Number(minutes.value);

        setInterval1 = setInterval(time, 1000);
        function time() {
            if (timeSeconds >= 1 || timeMinutes >= 1) {
                display.textContent = `0:${timeMinutes}:${timeSeconds}`;
                timeSeconds--;
            } else {
                audioAlarm.play();
                clearInterval(setInterval1);
            }
        }
        stateTime = 2;
        document.querySelector('#btnStart span').textContent = 'Parar \b alarme';
    } else {

        clearInterval(setInterval1);
        stateTime = 1;
        document.querySelector('#btnStart span').textContent = 'Iniciar \b alarme';
    }


}

btnStart.onclick = startTime;

