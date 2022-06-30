// import the elements
const entrada = document.querySelector('#number');
const resulted = document.querySelector('#result');

// entrada.addEventListener('input', () => { factore(3) });

entrada.oninput = () => { factore(entrada.value) };

function factore(x) {
    let factore = x;

    if (x == 0) {
        resulted.textContent = `O fatorial de ${x} é 1.`;
        return 1;

    } else if (x > 0 && x != '') {
        for (let n = x - 1; n > 1; n--) {
            factore = BigInt(factore) * BigInt(n);
            console.log(n);
        }
        resulted.textContent = `O fatorial de ${x} é ${factore}.`;
        return factore;

    } else { resulted.textContent = ''; }


}