"use strict";
// string
let nome = 'João';
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
// console.log(retornaMeuNome())
function digaOi() {
    console.log('Oi');
}
// digaOi()
function multiplicar(numA, numB) {
    return numA * numB;
}
function soma(numA, numB) {
    return numA + numB;
}
// console.log(soma(2, 2))
// console.log(multiplicar(4.7, 9))
// tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
