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
    var f = new Familia_kennedy("Leo");
    var f_static = Familia_kennedy._apelido;
    console.log(f);
    console.log(f.Nome);
    console.log(f_static);
    var h = new Homem();
    var m = new Mulher();
    console.log(" Mulher  " + m.falar());
    console.log(m.Assistir());
    console.log(" Homem  " + h.falar());
    console.log(h.Assistir());
}
var Humano = /** @class */ (function () {
    function Humano() {
    }
    Humano.prototype.falar = function () {
        return "Eu falei";
    };
    return Humano;
}());
var Homem = /** @class */ (function (_super) {
    __extends(Homem, _super);
    function Homem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Homem.prototype.Assistir = function () {
        return "A maioria dos homens assiste futebol";
    };
    return Homem;
}(Humano));
var Mulher = /** @class */ (function (_super) {
    __extends(Mulher, _super);
    function Mulher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mulher.prototype.Assistir = function () {
        return "A maioria das mulheres assiste novela";
    };
    return Mulher;
}(Humano));
var Familia_kennedy = /** @class */ (function () {
    function Familia_kennedy(n) {
        this._nome = n + " " + Familia_kennedy._apelido;
    }
    Object.defineProperty(Familia_kennedy.prototype, "Nome", {
        get: function () {
            return this._nome;
        },
        enumerable: true,
        configurable: true
    });
    Familia_kennedy._apelido = "Kennedy";
    return Familia_kennedy;
}());
