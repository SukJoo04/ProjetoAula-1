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

const valor1=20;
const valor2=10;

console.log(valor1 + valor2);
console.log(valor1 / valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);

// OPERADORES LÓGICOS

console.log(valor1 < valor2);   // Maior
console.log(valor1 > valor2);   // Menor
console.log(valor1 >= valor2);  // Maior igual
console.log(valor1 <= valor2);  // Menor igual
console.log(valor1 = valor2);   // Atribuir
console.log(valor1 == valor2);  // Comparar
console.log(valor1 === valor2); // Comparar e verificar o tipo
console.log(valor1 != valor2);  // Diferente

console.log(valor1 < valor2);
console.log(valor1 > 10 && valor2 != 20);
console.log(valor2 < 5 || valor1 > 50);

// OPERADORES DE COMPARAÇÃO

console.log(valor1 < valor2);
console.log(valor1 >= valor2);
console.log(valor1 <= valor2);
console.log(valor1 != valor2);
console.log(valor1 == valor2);
console.log(valor1 === valor2);

console.log("O valor é: ", valor2);

// EXERCÍCIOS
// 1) Utilizando as variáveis p (preço do produto) e v (valor do desconto, crie uma nova variável chamada preçoFinal que subtraia o desconto do preço e exiba o resultado)
const p= 20
const v= 10
const precoFinal = p - v
console.log("O preço final com desconto é:", precoFinal)

// 2) Verificação de Segurança (Login e Token) No banco, para autorizar uma transação, precisamos que o usuário esteja logado e que o token de segurança seja válido.
const usuarioLogado = 1;
const token = 100;
const transacãoAutorizada === 1 && token >= 10;
console.log("Transação Autorizada com sucesso", transaçãoAutorizada;

    