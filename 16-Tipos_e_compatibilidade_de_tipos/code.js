function Executar() {
    var a = "Leo";
    var b = "Campos";
    var c = 100;
    var d = true;
    var array = [1, "2", 3, "leo"];
    document.writeln(typeof (a));
    document.writeln(typeof (b));
    document.writeln(typeof (c));
    document.writeln(typeof (d));
    document.writeln(typeof (Sentidos));
    document.writeln(typeof (Sentidos.baixo));
    document.writeln(typeof (Sentidos[2]));
    document.writeln(typeof (array));
}
var Sentidos;
(function (Sentidos) {
    Sentidos[Sentidos["cima"] = 0] = "cima";
    Sentidos[Sentidos["baixo"] = 1] = "baixo";
    Sentidos[Sentidos["esquerda"] = 2] = "esquerda";
    Sentidos[Sentidos["direita"] = 3] = "direita";
})(Sentidos || (Sentidos = {}));
