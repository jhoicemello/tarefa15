var original = [];

function inserir() {
    texto = " ";
    numeroInserido = document.getElementById('entrada').value;
    original.push([numeroInserido]);
    original.forEach(imprimir);
    document.getElementById('resultado').innerHTML = texto;

}

function imprimir(item) {
     texto += item + ' ';
}