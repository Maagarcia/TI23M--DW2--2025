/****************************************************************
 * Seleção dos elementos HTML
 ****************************************************************/
// Botões
const btnBotoes = document.querySelectorAll("[btn-numero]");
const btnOperacoes = document.querySelectorAll("[btn-operador]");
const btnIgual = document.querySelector("[btn-igual]");
const btnDelete = document.querySelector("[btn-delete]");
const btnAC = document.querySelector("[btn-ac]");

// As divs que vão exibir os valores da calculadora
const bufferElemento = document.querySelector("[txt-buffer]");
const displayElemento = document.querySelector("[txt-display]");

// Objeto que irá representar e armazenar os dados da calculadora
const calculadora = {
  operandoAnterior: "",
  operandoAtual: "",
  operador: "",
  bufferTextoElemento: bufferElemento, // DIV buffer
  displayTextoElemento: displayElemento, // DIV display

};

/****************************************************************
 * Associar funções aos eventos dos elementos HTML
 ****************************************************************/
// Botão AC
btnAC.addEventListener("click", () => {
  limpaVariaveis(calculadora);

});

// Botão Delete
btnDelete.addEventListener("click", () => {
  apagaDigito(calculadora);


});

// Botão de igual
btnIgual.addEventListener("click", () => {
  executaCalculo(calculadora);


});

// Botões dos números
btnBotoes.forEach(botao => {
  botao.addEventListener("click", () => {
    adicionaNumero(calculadora, botao.textContent);
  });

});

// Botões dos operadores
btnOperacoes.forEach(botao => {
  botao.addEventListener("click", () => {
    escolheOperador(calculadora, botao.textContent); //pega os valor do botao
  });

});

/****************************************************************
 * Regras da aplicação
 ****************************************************************/

/* Atualiza o display da calculadora.
 * A atualização consiste em atualizar os elementos HTML buffer e display
 * O elemento buffer é atualizado com o atributo operandoAnterior
 * O elemento display é atualizado com o atributo operandoAtual
 */
function atualizaDisplay(calculadora) {
  calculadora.bufferTextoElemento.innerHTML = `<p>${calculadora.operandoAnterior} ${calculadora.operador}</p>`;
  calculadora.displayTextoElemento.textContent = calculadora.operandoAtual || "0";

}

/* Limpa os atributos do objeto calculadora e atualiza o display.
 * Para atualizar o display, chame a função responsável por isso.
 */
function limpaVariaveis(calculadora) {
  calculadora.operandoAnterior = "";
  calculadora.operandoAtual = "";
  calculadora.operador = "";
  atualizaDisplay(calculadora);

}

/* Função chamada quando um botão de número é pressionado
 * A função recebe o objeto calculadora e o número a ser exibido no display.
 * - Adiciona um dígito no atributo operandoAtual e atualiza o display
 * O dígito "." deve receber um tratamento especial
 */
function adicionaNumero(calculadora, numero) {
  
  if (numero === "." && calculadora.operandoAtual.includes(".")) return;//nao pode casos de dois pontos (0.98.3)


  
  calculadora.operandoAtual += numero;// Adiciona o número ou ponto ao operandoAtual
  atualizaDisplay(calculadora);

}

/* Função chamada quando um botão de operador é pressionado
 * Essa função tem comportamentos diferentes dependendo do estado da calculadora.
 * Se o operandoAnterior e o operandoAtual estiverem preenchidos
 * - executar o cálculo (chamar outra função para realizar o cálculo).
 * Caso o operandoAnterior estiver vazio,
 * - armazenar o operador recebido por parâmetro no atributo operador do objeto calculadora.
 * - copiar operandoAtual para o operandoAnterior, deixando a calculadora preparada para receber o próximo número
 */
function escolheOperador(calculadora, operador) {
  if (calculadora.operandoAtual === "") return;//precisa de um opreador

  if (calculadora.operandoAnterior !== "") {
    executaCalculo(calculadora);
  }

  calculadora.operador = operador;
  calculadora.operandoAnterior = calculadora.operandoAtual;
  calculadora.operandoAtual = "";
  atualizaDisplay(calculadora);
 }

/* A função recebe o objeto calculadora e executa o cálculo
 * - Verificar a operação a ser executada
 * - Executar a operação
 * - Atualizar os atributos operador, operandoAnterior e operandoAtual
 * - Atualizar o display
 */
function executaCalculo(calculadora) {
  const anterior = parseFloat(calculadora.operandoAnterior);
  const atual = parseFloat(calculadora.operandoAtual);

  if (isNaN(anterior) || isNaN(atual)) return; //se algum valor nao for numero nada aocntece


  let resultado = 0;

  switch (calculadora.operador) {
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
      if (anterior == 0 && atual == 0){
        resultado = "indefinido"
      }
      break;
    default:
      return;
  }

  calculadora.operandoAtual = resultado.toString();
  calculadora.operador = "";
  calculadora.operandoAnterior = "";
  atualizaDisplay(calculadora);}

function apagaDigito(calculadora) {
  calculadora.operandoAtual = calculadora.operandoAtual.slice(0, -1);
  atualizaDisplay(calculadora);}
