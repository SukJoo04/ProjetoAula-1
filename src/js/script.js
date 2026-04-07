// Declarações e Variaveis

// var, let e const
var xpto=10;
console.log(xpto);
var xpto=20;
console.log(xpto);
//let - pode redeclarar e acessar fora do escapo
//let não pode redeclarar e não consegue acessar fora do espaco
if(true){
var nome= "Fiap"
}
console.log(nome)

//const
//const taxaJuros =0.85;
//taxaJuros =0.50;
//console.log(taxaJuros)

// var exemplo1='Ola dev'
// console.log(exemplo1);

// let exemplo2='Ola dev const'
// console.log(exemplo2);

// const exemplo3 ="ola dev const"
// console.log(exemplo3);

//     let exemplo4 =20;
//     console.log(exemplo4);

//     let exemplo5=true;
//     console.log (typeof exemplo5);

//     let exemplo6={nome:"Fiap"};
//     console.log (typeof exemplo6)
    
//     let exemplo7=["Java","Python","C#"]
//     console.log(exemplo7);

//     //Variavel indefinida
//     let exemplo8;
//     console.log(exemplo8);

//     let exemplo9=null;
//     console.log(exemplo9);

// OPERADORES ARITMÉTICOS

// const valor1=20;
// const valor2=10;

// console.log(valor1 + valor2);
// console.log(valor1 / valor2);
// console.log(valor1 - valor2);
// console.log(valor1 * valor2);

// // OPERADORES LÓGICOS

// console.log(valor1 < valor2);   // Maior
// console.log(valor1 > valor2);   // Menor
// console.log(valor1 >= valor2);  // Maior igual
// console.log(valor1 <= valor2);  // Menor igual
// console.log(valor1 = valor2);   // Atribuir
// console.log(valor1 == valor2);  // Comparar
// console.log(valor1 === valor2); // Comparar e verificar o tipo
// console.log(valor1 != valor2);  // Diferente

// console.log(valor1 < valor2);
// console.log(valor1 > 10 && valor2 != 20);
// console.log(valor2 < 5 || valor1 > 50);

// // OPERADORES DE COMPARAÇÃO

// console.log(valor1 < valor2);
// console.log(valor1 >= valor2);
// console.log(valor1 <= valor2);
// console.log(valor1 != valor2);
// console.log(valor1 == valor2);
// console.log(valor1 === valor2);

// console.log("O valor é: ", valor2);

// // EXERCÍCIOS
// // 1) Utilizando as variáveis p (preço do produto) e v (valor do desconto, crie uma nova variável chamada preçoFinal que subtraia o desconto do preço e exiba o resultado)
// const p = 20
// const v = 10
// const precoFinal = p - v
// console.log("O preço final com desconto é:", precoFinal)

// // 2) Verificação de Segurança (Login e Token) No banco, para autorizar uma transação, precisamos que o usuário esteja logado e que o token de segurança seja válido.
// const usuarioLogado = 1;
// const token = 100;
// const transacãoAutorizada = 1 && token >= 10;
// console.log("Transação Autorizada com sucesso", transaçãoAutorizada);

// // ESTRUTURA CONDICIONAL

// if(true){
//     console.log("é Verdadeiro")
// }

// // if/else

// let nome="Fiap"

// if(nome=="Fiap")
// {
//     console.log("nome Errado") 
// }

// // if encadeado ou aninhado

// let idade = 17;
// if(idade <= 13){
//     console.log("é uma criança")
// } else if (idade >13 && idade <=18){
//     console.log("é um adolecente")
// } else if (idade >18 && idade <=59)
//     console.log("é um adulto")
// else {
//     console.log("é um idoso")
// }

// // SWITCH CASE

// let times="santos";

// switch(times){
//     case "santos":
//         console.log("Um time idoso")
//         break;
//     case "sao paulo":
//         console.log("Time Panetone")
//         break;
//     case "palmeiras":
//         console.log("O MELHOR APENAS")
//         break
//     case "corinthians":
//         console.log("Time de antas")
//         break
//     default:
//         console.log("é tão ruim quanto a selação brasileira")
// }

// // TERNARIA

// let salario = 100;
// let resultado = salario == 100 ? "Salario Certo":"Salario Errado"
// console.log(resultado)

// let usuario = "fiap";
// let userLogado = usuario === "fiap"?"Logado com sucesso":"usuario inválido"
// console.log(userLogado);

// function verificarParImpar(numero){
//     return numero % 2 === 0 ? "Par":"Impar";
// }

// console.log(verificarParImpar(10))

// ESTRUTURA DE REPETIÇÃO (LAÇO DE REPETIÇÃO)

// for - Estrutura de repetição utilizada quando sabemos previamente quantas vezes o código vai ser executado

// declaração, operação, incremento
for(let i=1; i<=5; i++){
    console.log("Numero:",i);
}
// for para array

const linguagens = ["Java","Python","C#","PHP"];

for(let i=0; i < linguagens.length;i++){
    console.log("Linguagem", i, ":", linguagens[i]);
}

const tecnologias =["JS","HTML","CSS"]

for(const tech of tecnologias){
    console.log("Estudando",tech)
}

const carros ={marca:"Volks",modelo:"Fusca",ano:1980};

for( let dados in carros){
    console.log(dados,":",carros,[dados])
}

//while - diferente do for o while não sabemos a quantidade de vezes que o código vai executar

// let i=1;

// while(i <=5){
//     console.log("contagem",i)
//     i++;
// }

// // declaração de variável indefinida
// let numero;

// while(numero !== "0"){
//     numero = prompt("Digite um numero( ou 0 pra sair)");
//     console.log("eu sei o que você digitou:", numero);
// }
// console.log("Fim do Programa")

// do while (Executa ao menos uma vez)
let contador =10;
do {
    console.log("vai executar pelo menos uma vez")
    contador++
}while (contador <=5);

// declaração da cariavel undefined
let palpite;

// gerar um numero aleatorio entre 1 e 10
const sorteio =Math.floor(Math.random() * 10)+1;

do{
    palpite = parseInt(prompt("Digite um numero entre 1 e 10"))

    if(isNawl(palpite))
        alert("saindo do jogo") 
    break;
}

    if(palpite !== sorteio){
    alert("Você perdeu R$ 100,00")
}               

while(palpite == sorteio)
    if(palpite === sorteio){
        alert("Parabéns, você acertou e ganhou R$ 100,00")
    }