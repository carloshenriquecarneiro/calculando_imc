// Calcular IMC 
let aluna_academia = {
    id: 2,
    nome: "Kysla Kiss Do Nascimento Melo",
    peso: 58,
    altura: 1.62,
    idade: 18
}


let nome_aluna = aluna_academia.nome
let idade_aluna = aluna_academia.idade
let peso_aluna = aluna_academia.peso
let altura_aluna = aluna_academia.altura



let imc_aluna = peso_aluna / (altura_aluna * altura_aluna)


console.log("O imc da aluna é: " + imc_aluna)



if(imc_aluna >= 18.5) {
    console.log("A aluna está abaixo do peso")
}else if (imc_aluna >= 18.5 && imc_aluna <= 25.99) {
    console.log("A aluna está com o peso normal")
}else {
    console.log("A aluna está acima do peso")
}
