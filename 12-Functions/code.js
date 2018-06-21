function Executar() {
    console.log(Multiplicar(10, 15));
    // função anônima
    var resultado = function (c, d) {
        return c + d;
    };
    var adicao = function (a, b) { return a + b; };
    adicao(10, 30);
    var resul2 = Adicionar2(50); // Retorna NaN, porque não passou o valor para "b" e a = 50 + b = null/underfined = NaN
}
function Multiplicar(a, b) {
    return a * b;
}
function Adiconar(a, b) {
    return a + b;
}
function Adicionar2(x, y) {
    return x + y;
}
function NomeCompleto(nome, apelido) {
    var nomeCompleto = "";
    if (apelido) {
        nomeCompleto = nome + " " + apelido;
    }
    else {
        nomeCompleto = nome;
    }
    return nomeCompleto;
}
// Parametros opcionais
function NomeCompleto2(nome, apelido) {
    if (apelido === void 0) { apelido = "Campos"; }
    return nome + " " + apelido;
}
