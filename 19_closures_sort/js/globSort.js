// function for create glob and sort
export default function GlobSort(min, max) {
    let arrGlob = [];
    let arrSorteado = [5];

    function createGlob() {
        for (let n = min; n <= max; n++) {
            arrGlob.push(n);
        }
    };

    function sortear() {
        arrGlob.sort(() => Math.random() - 0.5);
        const x = arrGlob.pop();
        arrSorteado.push(x);
        return x;
    };

    function getGlob() {
        return arrGlob;
    };

    function getSort() {
        return arrSorteado;
    };

    createGlob();

    return { sortear, getSort, getGlob, createGlob };
}