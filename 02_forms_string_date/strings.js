const compare_btn = document.querySelector('#btn_compare');
const resulted = document.querySelector('#result')

function compare_string() {
    let input1_value = (document.querySelector('#string1')).value;
    let input2_value = (document.querySelector('#string2')).value;
    let input1_length = input1_value.length;
    let input2_length = input2_value.length;

    if (input1_length > input2_length) {
        resulted.textContent = `O comprimento da primeira string é maior que a segunda!`;
    } else if (input1_length < input2_length) {
        resulted.textContent = `O comprimento da primeira string é menor que a segunda!`;
    } else if (input1_length == input2_length) {
        resulted.textContent = `O comprimento da primeira string é igual a segunda!`;
    }
}

compare_btn.onclick = compare_string;