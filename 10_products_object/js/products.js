// import the elements
const btnIncludeProducts = document.querySelector('#btnIncludeProducts');
const btnListProducts = document.querySelector('#btnListProducts');
const btnAlert = document.querySelector('#btnAlert');
const backAlert = document.querySelector('#backAlert');
const tableProducts = document.querySelector('#tableProducts');
const msg = document.querySelector('#msg');

// click buttons
btnIncludeProducts.onclick = includeProducts;
btnAlert.onclick = closeAlert;
btnListProducts.onclick = listProducts;

let products = [];

// function the inclusion the products
function includeProducts() {
    const name = document.querySelector('#name').value;
    const description = document.querySelector('#description').value;
    const price = (document.querySelector('#price').value).replace(',', '.');

    if (checkFields(name, description, price) == 'true') {

        products.push({ id: products.length, nome: name, descricao: description, valor: price, incluidoEm: new Date });

        msg.textContent = `Produto ${products[products.length - 1].nome} incluído com sucesso!`;
        printMsg('true', 'false'); // true or false for msg and table (true == visible | false == hidden)

        console.log(`ID: ${products[products.length - 1].id} NOME:${products[products.length - 1].nome} DESCRIÇÃO: ${products[products.length - 1].descricao} PREÇO: ${products[products.length - 1].valor}`);
    }
}

// function the verification the camps
function checkFields(name, description, price) {

    if (name == '' || description == '' || price == '') {
        msg.textContent = 'Falha no cadastro do produto! Preencha todos os campos.';
        printMsg('true', 'false'); // true or false for msg and table (true == visible | false == hidden)      
        return 'false';

    } else if (name.length < 3 || description.length < 3) {
        msg.textContent = 'Falha no cadastro do produto! Coloque pelo menos 3 caracteres no nome e na descrição do produto.';
        printMsg('true', 'false'); // true or false for msg and table (true == visible | false == hidden)
        return 'false';

    } else if (isNaN(price) || price < 0) {
        msg.textContent = 'Falha no cadastro do produto! Digite um preço válido.';
        printMsg('true', 'false'); // true or false for msg and table (true == visible | false == hidden)
        return 'false';

    } else { return 'true'; }
}

// function for print mensage
function printMsg(msgPrint, tablePrint) {

    if (msgPrint == 'true') {
        msg.style.visibility = 'visible';
    }
    if (tablePrint == 'true') {
        tableProducts.style.visibility = 'visible';
    }
    backAlert.style.visibility = 'visible';
}

// function for close alert
function closeAlert() {
    backAlert.style.visibility = 'hidden';
    msg.style.visibility = 'hidden';
    tableProducts.style.visibility = 'hidden';
}

// function for list products
function listProducts() {

    tableProducts.innerHTML = `   
        <tr>
            <th>Produto</th>
            <th>Valor</th>
            <th>Editar</th>
            <th>Apagar</th>
        </tr>`;

    let cont1 = 0;
    while (cont1 < (products.length)) {

        let tr = document.createElement('tr');

        let cont2 = 0;
        while (cont2 < 4) {

            let td = document.createElement('td');

            switch (cont2) {
                case 0:
                    td.textContent = `${products[cont1].id} ${products[cont1].nome}`;
                    break;
                case 1:
                    td.textContent = `R$ ${parseFloat(products[cont1].valor).toFixed(2)}`;
                    break;
                case 2:
                    td.innerHTML = '<img class="editAndDelet" src="img/toEdit.png" alt="Editar"></img>';
                    break;
                case 3:
                    td.innerHTML = '<img class="editAndDelet" src="img/trashCan.svg" alt="Editar">';
                    break;
            }
            tr.appendChild(td);
            cont2++;
        }
        tableProducts.appendChild(tr);
        cont1++;
    }
    printMsg('false', 'true'); // true or false for msg and table (true == visible | false == hidden)
}


tableProducts.addEventListener('click', deletProduct(Event))

// function for delete product
function deletProduct(event) {
    
}