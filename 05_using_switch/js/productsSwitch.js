// import the elements
const btnPrint = document.querySelector('#btnPrint');
const result = document.querySelector('#result');
const img = document.querySelector('#image'); 

// function smaller and larger number
function print() {

    const product = document.querySelector('#listTheProducts').value;

    // condition the number
    switch (product) {
        case '1': img.src='./img/1_almofadaCoccix.webp'; break;
        case '2': img.src='./img/2_cadeiraEscritorio.webp'; break;
        case '3': img.src='./img/3_cameraLogitech.webp'; break;
        case '4': img.src='./img/4_encostoLombar.webp'; break;
        case '5': img.src='./img/5_headsetRazer.webp'; break;
    }
}

btnPrint.onclick = print;