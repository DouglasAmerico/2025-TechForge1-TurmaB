const prompt = require("prompt-sync")();
const senhaCorreta = 20;
let senhaInformada;
do {
    senhaInformada = prompt("Informe a senha: ");
    if (senhaInformada != senhaCorreta) {
        console.log("Senha incorreta tente novamente");
        
    } else {
        console.log("Bem vindo");
    }  
} while (senhaInformada != senhaCorreta);