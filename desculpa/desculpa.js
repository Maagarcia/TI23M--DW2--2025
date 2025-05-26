// Corrigindo a seleção do displayElemento (estava pegando só o texto, não o elemento)
const displayElemento = document.querySelector("[txt-display]");

const calculadora = {
  operandoAnterior: "",
  operandoAtual: "",
  operador: "",
  bufferTextoElemento: bufferElemento,
  displayTextoElemento: displayElemento,
};

function atualizaDisplay(calc) {
  calc.bufferTextoElemento.innerHTML = `<p>${calc.operandoAnterior} ${calc.operador}</p>`;
  calc.displayTextoElemento.textContent = calc.operandoAtual || "0";
}

function limpaVariaveis(calc) {
  calc.operandoAnterior = "";
  calc.operandoAtual = "";
  calc.operador = "";
  atualizaDisplay(calc);
}

function adicionaNumero(calc, numero) {
  if (numero === "." && calc.operandoAtual.includes(".")) return;
  calc.operandoAtual += numero;
  atualizaDisplay(calc);
}

function escolheOperador(calc, operador) {
  if (calc.operandoAtual === "") return;
  if (calc.operandoAnterior !== "") {
    executaCalculo(calc);
  }
  calc.operador = operador;
  calc.operandoAnterior = calc.operandoAtual;
  calc.operandoAtual = "";
  atualizaDisplay(calc);
}

function executaCalculo(calc) {
  const anterior = parseFloat(calc.operandoAnterior);
  const atual = parseFloat(calc.operandoAtual);
  if (isNaN(anterior) || isNaN(atual)) return;

  let resultado = 0;
  switch (calc.operador) {
    case "+":
      resultado = anterior + atual;
      break;
    case "-":
      resultado = anterior - atual;
      break;
    case "*":
      resultado = anterior * atual;
      break;
    case "÷":
      resultado = anterior / atual;
      break;
    default:
      return;
  }

  calc.operandoAtual = resultado.toString();
  calc.operador = "";
  calc.operandoAnterior = "";
  atualizaDisplay(calc);
}

function apagaDigito(calc) {
  calc.operandoAtual = calc.operandoAtual.toString().slice(0, -1);
  atualizaDisplay(calc);
}

// Eventos
btnBotoes.forEach(botao => {
  botao.addEventListener("click", () => {
    adicionaNumero(calculadora, botao.textContent);
  });
});

btnOperacoes.forEach(botao => {
  botao.addEventListener("click", () => {
    escolheOperador(calculadora, botao.textContent);
  });
});

btnAC.addEventListener("click", () => limpaVariaveis(calculadora));
btnDelete.addEventListener("click", () => apagaDigito(calculadora));
btnIgual.addEventListener("click", () => executaCalculo(calculadora));
