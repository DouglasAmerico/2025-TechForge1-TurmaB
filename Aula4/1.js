const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Informe o primeiro valor: "));
let numero2 = Number(prompt("Informe o segundo valor: "));

if(numero1 > numero2){
    console.log("O numero "+numero1+" é o maior");
}else if(numero1 < numero2){
    console.log("O numero "+numero2+" é o maior");
}else{
    console.log("Os numero "+numero1+" e "+numero2+" são iguais");
    
}
    