function Executar() {
    document.write(apresentar("Leonardo"));
    document.write(Funcao_Generica("Função genérica :) "));
}
// Não genérico
function apresentar(valor) {
    return valor;
}
// É genérico
function Funcao_Generica(valor) {
    return valor;
}
