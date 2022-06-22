// import the elements
const btnIncludeProducts = document.querySelector('#btnIncludeProducts');
const btnListProducts = document.querySelector('#btnListProducts');
const btnAlert = document.querySelector('#btnAlert');
const backAlert = document.querySelector('#backAlert');
const tableProducts = document.querySelector('#tableProducts');
const msg = document.querySelector('#msg');

// click buttons
btnIncludeProducts.onclick = includeProducts;
btnListProducts.onclick = listProducts;
btnAlert.onclick = closeAlert;

let products = [];

// function inclusion the products
function includeProducts() {
    backAlert.style.visibility = 'visible';
    msg.style.visibility = 'visible';

    // inputs
    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;
    const price = document.querySelector('#price').value;

    if (name == '') {
        msg.textContent = `Falha no cadastro do produto! Insira o nome do produto.`;
    } else if (description == '') {
        msg.textContent = `Falha no cadastro do produto! Insira a descrição do produto.`;
    } else if (isNaN(price) || price == '') {
        msg.textContent = `Falha no cadastro do produto! Insira um preço válido.`;
    } else {
        products.push({ id: products.length, nome: name, descricao: description, valor: price, incluidoEm: new Date });
        msg.textContent = `Produto ${products[(products.length) - 1].nome} incluído com sucesso!`;

        // const tr = document.createElement('tr');
        // const coluns = [`
        //     ${products[(products.length) - 1].id} ${products[(products.length) - 1].nome} `,
        // `${products[(products.length) - 1].valor}`,
        //     'X',
        //     'Y'];
        // let i = 0;
        // while (i < 4) {
        //     const td = document.createElement('td');
        //     td.textContent = coluns[i];
        //     tr.appendChild(td);
        //     i++;
        // }
        // tableProducts.appendChild(tr);
    }
}

// function the list products
function listProducts() {
    backAlert.style.visibility = 'visible';
    tableProducts.style.visibility = 'visible';


    const tr = document.createElement('tr');
    const coluns = [`
            ${products[(products.length) - 1].id} ${products[(products.length) - 1].nome} `,
    `${products[(products.length) - 1].valor}`,
        'X',
        'Y'];
    let i = 0;
    while (i < 4) {
        const td = document.createElement('td');
        td.textContent = coluns[i];
        tr.appendChild(td);
        i++;
    }
    tableProducts.appendChild(tr);
}

// function the close alert
function closeAlert() {
    backAlert.style.visibility = 'hidden';
    msg.style.visibility = 'hidden';
    tableProducts.style.visibility = 'hidden';
}

function printAlert() { }
