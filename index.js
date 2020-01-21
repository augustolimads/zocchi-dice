//ações dos botões
//rolagem dos dados
//dinamica de exibição dos dados
//animações e sons

//Teste ação
const btnDados = document.querySelectorAll("#dice-pool .btn");
btnDados.forEach(btn => {
  btn.addEventListener("click", () => {
    let listaDados = document.querySelectorAll("#result div").length;
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
  criaDado(btnClicado);
}

//soma o resultado no total
let total = 0;

function somaTotal(roll) {
  total += roll;
  document.querySelector("#soma").innerText = total;
}

//cria um dado quando clica no botao
function criaDado(dado) {
  let novoDado = document.createElement("div");
  let roll = 0;
  novoDado.classList.add("dice", dado);
  roll = diceRoller(dado);
  novoDado.innerText = roll;
  document.querySelector("#result").appendChild(novoDado);
  somaTotal(roll);
}

//muda o tamanho dos dados exibidos
function dadosMid() {
  let dados = document.querySelectorAll("#result div");
  dados.forEach(dado => {
    dado.classList.remove("dice", "dice-min");
    dado.classList.add("dice-mid");
  });
}

function dadosMin() {
  let dados = document.querySelectorAll("#result div");
  dados.forEach(dado => {
    dado.classList.remove("dice", "dice-mid");
    dado.classList.add("dice-min");
  });
}

function dadosBig() {
  let dados = document.querySelectorAll("#result div");
  dados.forEach(dado => {
    dado.classList.remove("dice-min", "dice-mid");
    dado.classList.add("dice");
  });
}

//random do dado
function diceRoller(dado) {
  let rand = Math.random();
  const upper = Number(dado.slice(1));
  return Math.round(rand * (upper - 1) + 1);
}

//clear - deleta todos os itens

document
  .querySelector(".clear")
  .addEventListener("click", () => location.reload());

//deleta um dado quando clica nele

document.querySelector("#result").addEventListener("click", function(e) {
  if (e.target.querySelectorAll("div.dice div.dice-mid div.dice-min")) {
    e.target.remove();
  }
});

function diceDelete() {}
