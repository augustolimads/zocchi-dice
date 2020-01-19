//ações dos botões
//rolagem dos dados
//dinamica de exibição dos dados
//animações e sons

//Teste ação
const btnDados = document.querySelectorAll('#dice-pool .btn');
btnDados.forEach(btn => {
    btn.addEventListener('click', () => {
        let listaDados = document.querySelectorAll('#result div').length;
        efeitoBtn(btn.classList[1]); //d2
        if (listaDados >= 4) {
            dadosMid();
        }
        if (listaDados >= 9) {
            dadosMin();
        }
        if (listaDados <= 3) {
            dadosBig();
        }
    });
});


//teste de resultado do dado
function efeitoBtn(btnClicado) {
    switch (btnClicado) {
        case 'd2':
            criaDado(btnClicado);
            break;
        case 'd3':
            criaDado(btnClicado);
            break;
        case 'd4':
            criaDado(btnClicado);
            break;
        case 'd5':
            criaDado(btnClicado);
            break;
        case 'd6':
            criaDado(btnClicado);
            break;
        case 'd7':
            criaDado(btnClicado);
            break;
        case 'd8':
            criaDado(btnClicado);
            break;
        case 'd10':
            criaDado(btnClicado);
            break;
        case 'd12':
            criaDado(btnClicado);
            break;
        case 'd14':
            criaDado(btnClicado);
            break;
        case 'd16':
            criaDado(btnClicado);
            break;
        case 'd20':
            criaDado(btnClicado);
            break;
        case 'd24':
            criaDado(btnClicado);
            break;
        case 'd30':
            criaDado(btnClicado);
            break;
        case 'd100':
            criaDado(btnClicado);
            break;
        default:
            console.log('tente novamente');
            break;
    };
};

//cria um dado quando clica no botao
function criaDado(dado) {
    let novoDado = document.createElement('div');
    novoDado.classList.add('dice', dado);
    novoDado.innerText = diceRoller(dado);
    document.querySelector('#result').appendChild(novoDado);
}

//muda o tamanho dos dados exibidos
function dadosMid() {
    let dados = document.querySelectorAll('#result div');
    dados.forEach(dado => {
        dado.classList.remove('dice', 'dice-min');
        dado.classList.add('dice-mid');
    });
}

function dadosMin() {
    let dados = document.querySelectorAll('#result div');
    dados.forEach(dado => {
        dado.classList.remove('dice', 'dice-mid');
        dado.classList.add('dice-min');
    });
}

function dadosBig() {
    let dados = document.querySelectorAll('#result div');
    dados.forEach(dado => {
        dado.classList.remove('dice-min', 'dice-mid');
        dado.classList.add('dice');
    });
}

//random do dado
function diceRoller(dado) {
    let rand = Math.random();
    const upper = Number(dado.slice(1));
    return Math.round(rand * (upper - 1) + 1);
}

//clear - deleta todos os itens

document.querySelector('.clear').addEventListener('click', () => location.reload())


//deleta um dado quando clica nele
let dadosGerados = document.querySelectorAll('#result div')

function diceDelete() {

}