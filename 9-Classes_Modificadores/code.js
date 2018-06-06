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
    var pessoa = new Humano("Leonardo");
    document.write(pessoa.falar("Papai"));
    document.write(pessoa.andar()); // Cria o javascript e não ocorre erro.
    var _homem = new Homem("leo");
    _homem.setIdade(35);
    document.write(_homem.getIdade());
    var _mulher = new mulher("priscila");
    _mulher.setIdade(32);
    document.write(_mulher.getIdade());
}
var Humano = /** @class */ (function () {
    function Humano(n) {
        this.nome = n;
    }
    Humano.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    Humano.prototype.getIdade = function () {
        return this.idade;
    };
    Humano.prototype.falar = function (texto) {
        return this.nome + " disse " + texto;
    };
    Humano.prototype.andar = function () {
        return this.nome + " andou";
    };
    return Humano;
}());
var Mulher = /** @class */ (function (_super) {
    __extends(Mulher, _super);
    function Mulher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mulher;
}(Humano));
var Homem = /** @class */ (function (_super) {
    __extends(Homem, _super);
    function Homem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Homem;
}(Humano));
