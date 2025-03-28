const prompt = require("prompt-sync")();

let numeroParImpar = prompt("Informe o numero para verificar se é par ou impar: ");
if(numeroParImpar % 2 == 0){
    console.log("Numero Par");
}else{
    console.log("Numero Impar");
    
}

let numeroParDivisivel7 = prompt("Informe o numero para verificar se é par e divisivel por 7: ");
if((numeroParDivisivel7 % 2 == 0) && (numeroParDivisivel7 % 7 == 0)){
    console.log("O numero é par e divisivel por 7");
}else{
    console.log("Ou o numero não é par ou não é divisivel por 7");
}

let numeroDivisivel7Divisivel23 = prompt("Informe o numero para verificar se o numero é divisivel por 7 ou por 23: ");
if((numeroDivisivel7Divisivel23 % 7 == 0) || (numeroDivisivel7Divisivel23 % 23 == 0)){
    console.log("O numero é divisivel por 7 ou por 23");
}else{
    console.log("O numero não é divisivel por 7 nem por 23");
}