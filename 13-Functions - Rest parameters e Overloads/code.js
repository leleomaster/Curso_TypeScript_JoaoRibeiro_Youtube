function Executar() {
    var nomeCompleto = ListaNome("Leonardo", "Campos");
    var nomes = ListaNomeRest("Leonardo", "Rest 1", "Rest 2", "Rest 3");
    console.log(nomes);
    var nomes2 = Juntar("leleo ", " prado");
    var resultado = Juntar(10, 20);
    console.log(nomes2);
    console.log(resultado);
}
// Overload
function Juntar(x, y) {
    return x + y;
}
function ListaNome(nome, apelido) {
    return nome + " " + apelido;
}
// Rest = restante
function ListaNomeRest(nome) {
    var restante = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restante[_i - 1] = arguments[_i];
    }
    return nome + " " + restante;
}
