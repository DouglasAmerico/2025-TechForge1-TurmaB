const leitura = require("prompt-sync")();

let valorInteiro = leitura("Informe o valor inteiro: ");
valorInteiro = valorInteiro / 2;
console.log("Metade: "+valorInteiro);

let valorDecimal = leitura("Informe o valor decimal: ");
valorDecimal = valorDecimal / 5;
console.log("Dividido por 5: "+valorDecimal);

let primeiroValor = leitura("Informe o primeiro valor: ");
let segundoValor = leitura("Informe o segundo valor: ");
let conta = primeiroValor / segundoValor;
console.log(primeiroValor+" / "+segundoValor+" = "+conta);
