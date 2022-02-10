"use strict";
function saudarComOla(pessoa) {
    console.log('Olá', pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Pedro';
}
const pedro = {
    nome: 'Áquila',
    idade: 30,
    saudar(sobrenome) {
        console.log("Olá, " + this.nome + " " + sobrenome);
    }
};
saudarComOla(pedro);
mudarNome(pedro);
saudarComOla(pedro);
pedro.saudar('Tavares');
class Cliente {
    constructor() {
        this.nome = '';
    }
    saudar(sobrenome) {
        console.log("Olá, " + this.nome + " " + sobrenome);
    }
}
const joao = new Cliente();
joao.nome = "João";
saudarComOla(joao);
let potencia;
potencia = function (base, exp) {
    return Math.pow(base, exp);
};
console.log(potencia(3, 2));
