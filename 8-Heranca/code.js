var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function Executar() {
    var _animal = new animal(enumTipoAnimal.cavalo);
    document.write(_animal.mover(200));
    var _cavalo = new cavalo(enumTipoAnimal.cavalo);
    document.write("<br><br>");
    document.write(_cavalo.mover(150));
    var _peixe = new peixe(enumTipoAnimal.peixe);
    document.write("<br><br>");
    document.write(_peixe.mover(1006));
}
var animal = /** @class */ (function () {
    function animal(designacao) {
        this.designacao = designacao;
    }
    animal.prototype.mover = function (metros) {
        return "Eu desloquei-me " + metros + " metros";
    };
    return animal;
}());
var cavalo = /** @class */ (function (_super) {
    __extends(cavalo, _super);
    function cavalo(designacao) {
        return _super.call(this, designacao) || this;
    }
    cavalo.prototype.mover = function (metros) {
        return " A cavalgar ... " + _super.prototype.mover.call(this, metros);
    };
    return cavalo;
}(animal));
var peixe = /** @class */ (function (_super) {
    __extends(peixe, _super);
    function peixe(designacao) {
        return _super.call(this, designacao) || this;
    }
    peixe.prototype.mover = function (metros) {
        return " A nadar ... " + _super.prototype.mover.call(this, metros);
    };
    return peixe;
}(animal));
var enumTipoAnimal;
(function (enumTipoAnimal) {
    enumTipoAnimal[enumTipoAnimal["cavalo"] = 1] = "cavalo";
    enumTipoAnimal[enumTipoAnimal["peixe"] = 2] = "peixe";
})(enumTipoAnimal || (enumTipoAnimal = {}));
