function Executar() {
    var sentido = Direcoes.cima;
    document.writeln(sentido.toString()); // 0
    document.writeln(Direcoes[2]); // esquerda
    document.writeln(Mover(Direcoes.baixo));
    document.writeln(Mover(Direcoes.cima));
    document.writeln(Mover(Direcoes.direita));
    document.writeln(Mover(Direcoes.esquerda));
    document.writeln(Mover(null));
}
function Mover(sentido) {
    if (sentido == Direcoes.cima) {
        return "Foi pra cima";
    }
    else if (sentido == Direcoes.direita) {
        return "Foi pra direita";
    }
    else if (sentido == Direcoes.esquerda) {
        return "Foi pra esquerda";
    }
    else if (sentido == Direcoes.baixo) {
        return "Foi pra baixo";
    }
    else {
        return "Está parado";
    }
}
var Direcoes;
(function (Direcoes) {
    Direcoes[Direcoes["cima"] = 0] = "cima";
    Direcoes[Direcoes["baixo"] = 1] = "baixo";
    Direcoes[Direcoes["esquerda"] = 2] = "esquerda";
    Direcoes[Direcoes["direita"] = 3] = "direita";
})(Direcoes || (Direcoes = {}));
