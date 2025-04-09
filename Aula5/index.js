let numeros = "";

for(let x = 0;x<=10;x++){
    if(x == 10){
        numeros = numeros + x;    
    }else{
        numeros = numeros + x + ",";
    }
}

console.log(numeros);

let soma = 0;
for(let i=1;i<=10;i++){
    soma = soma + i;
}

console.log("A soma dos valores é: "+soma);


let contadora=0;
for(let i=121;i<237;i++){
    if(i%2 == 0){
        contadora++;
    }
}

console.log("Existe "+contadora+" numeros pares entre 121 e 237");
