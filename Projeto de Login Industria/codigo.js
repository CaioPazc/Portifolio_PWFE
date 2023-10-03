function mudar(caminho){
    document.getElementById("logo").src=caminho
}

function atualizarDataHora() {
    // Crie um objeto de data
    const dataHora = new Date();

    // Obtenha os componentes de data e hora
    const data = dataHora.toLocaleDateString();
    const hora = dataHora.toLocaleTimeString();

    // Atualize o conteúdo do parágrafo com a data e hora
    document.getElementById('data').textContent = `Data: ${data} - Hora: ${hora}`;
}

// Chame a função inicialmente e, em seguida, a cada segundo para manter a data e hora atualizadas
atualizarDataHora();
setInterval(atualizarDataHora, 1000);


// aumento sala

function calcularAumentoSalarial() {
    const salario = parseFloat(document.getElementById('salario').value);
    let aumento = 0;

    if (salario <= 1200) {
        aumento = salario * 0.16;
    } else if (salario <= 2100) {
        aumento = salario * 0.13;
    } else if (salario <= 3000) {
        aumento = salario * 0.10;
    } else {
        aumento = salario * 0.05;
    }

    const novoSalario = salario + aumento;

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Novo Salário: R$ ${novoSalario.toFixed(2)}`;

    exibirDataHora();
}

function limparCampos() {
    document.getElementById('salario').value = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('data-hora').textContent = '';
}

function exibirDataHora() {
    const dataHoraAtual = new Date();
    const formatoDataHora = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const dataHoraFormatada = dataHoraAtual.toLocaleDateString('pt-BR', formatoDataHora);

    const dataHoraElement = document.getElementById('data-hora');
    dataHoraElement.textContent = `Data e Hora Atuais: ${dataHoraFormatada}`;
}

//frete

function calcularCusto() {
    const quantidadeFuncionarios = parseInt(document.getElementById('quantidadeFuncionarios').value);
    const diasUteis = parseInt(document.getElementById('diasUteis').value);
    let custoMensal = 0;

    if (quantidadeFuncionarios >= 1 && quantidadeFuncionarios <= 49) {
        custoMensal = 4.50 * quantidadeFuncionarios * diasUteis;
    } else if (quantidadeFuncionarios >= 50 && quantidadeFuncionarios <= 99) {
        custoMensal = 4.10 * quantidadeFuncionarios * diasUteis;
    } else if (quantidadeFuncionarios >= 100 && quantidadeFuncionarios <= 149) {
        custoMensal = 3.80 * quantidadeFuncionarios * diasUteis;
    } else if (quantidadeFuncionarios >= 150) {
        custoMensal = 3.60 * quantidadeFuncionarios * diasUteis;
    }

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Custo Mensal: R$ ${custoMensal.toFixed(2)}`;

    exibirDataHora();
}

function limparCampos() {
    document.getElementById('quantidadeFuncionarios').value = '';
    document.getElementById('diasUteis').value = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('data-hora').textContent = '';
}

function exibirDataHora() {
    const dataHoraAtual = new Date();
    const formatoDataHora = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const dataHoraFormatada = dataHoraAtual.toLocaleDateString('pt-BR', formatoDataHora);

    const dataHoraElement = document.getElementById('data-hora');
    dataHoraElement.textContent = `Data e Hora Atuais: ${dataHoraFormatada}`;
}

//salario

function calcularHorasExtras() {
    const salario = parseFloat(document.getElementById('salario').value);
    const horasNormais = parseFloat(document.getElementById('horasNormais').value);
    const horasFinaisDeSemana = parseFloat(document.getElementById('horasFinaisDeSemana').value);

    const valorDaHora = salario / 200;
    const valorHorasNormais = valorDaHora * horasNormais;
    const valorHorasFinaisDeSemana = (valorDaHora * horasFinaisDeSemana) * 1.5; // Acréscimo de 50%

    const valorTotal = valorHorasNormais + valorHorasFinaisDeSemana;

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Valor a Receber: R$ ${valorTotal.toFixed(2)}`;
}