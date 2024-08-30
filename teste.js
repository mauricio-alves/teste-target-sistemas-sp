// 1) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?
function calcularSoma() {
    let indice = 12, soma = 0, k = 1;
    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }
    return soma;
}
console.log(calcularSoma()); // Resposta: 77.

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
function verifyFibonacci(num) {
  let a = 0;
  let b = 1;
  let sum;
  while (a <= num) {
    if (a === num) {
      return console.log(`${num} pertence à sequência de Fibonacci.`);
    }
    sum = a + b;
    a = b;
    b = sum;
  }
  return console.log(`${num} não pertence à sequência de Fibonacci.`);
}
verifyFibonacci(13); // Resposta: 13 pertence à sequência de Fibonacci.
verifyFibonacci(26); // Resposta: 26 não pertence à sequência de Fibonacci.

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;



// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53
// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentualFaturamento(faturamentoPorEstado) {
    const valorTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
    const percentualPorEstado = {};
    for (let estado in faturamentoPorEstado) {
        percentualPorEstado[estado] = (faturamentoPorEstado[estado] / valorTotal * 100).toFixed(2) + '%';
    }
    return percentualPorEstado;
}

const percentuais = calcularPercentualFaturamento(faturamento);
for (let estado in percentuais) {
    console.log(`Estado: ${estado}, Percentual: ${percentuais[estado]}`);
}

// 5) Escreva um programa que inverta os caracteres de um string. IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return console.log("resultado:", result);
}
reverseString("Teste Target Sistemas"); // Resposta: sametsiS tegraT etseT
