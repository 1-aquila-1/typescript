"use strict";
var Cor;
(function (Cor) {
    Cor[Cor["verde"] = 10] = "verde";
    Cor[Cor["azul"] = 15] = "azul";
})(Cor || (Cor = {}));
let cor = Cor.verde;
console.log(cor);
