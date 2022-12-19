var meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

function mes() {
    data = new Date
    var mesAtual = data.getMonth();
    document.getElementById('resultado').innerHTML = `Estamos no mês de ${meses[mesAtual]}`
}

