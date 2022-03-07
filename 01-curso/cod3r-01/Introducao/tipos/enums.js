"use strict";
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
// console.log(minhaCor)
var UF;
(function (UF) {
    UF["PA"] = "Par\u00E1";
    UF["SP"] = "S\u00E3o Paulo";
})(UF || (UF = {}));
let meuEstado = UF.PA;
console.log(meuEstado);
