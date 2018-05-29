function Executar() {
    var nome = "Leonardo";
    // valor = 43;// Compila e gera o arquivo .js, mas imprime um "possível erro".
    document.getElementById("info").innerHTML = nome;
}
/*
    Tipo de dados Typescript
*/
function TipoDados() {
    var boleano = false; // .toString()
    var inteiro = 100; // .toString()
    var textos = "leonardo com aspas duplas";
    var textos2 = "leonardo com simples";
    var primeiro_nome = "leonardo";
    var segundo_nome = "campos";
    // Template
    var nome_completo = primeiro_nome + " - " + segundo_nome;
    var nomes = ["leo", "silva", "jose", "campos"]; // tamanho/lenght 3
    document.getElementById("info").innerHTML = nomes[2];
    var apelidos = ["leo", "silva", "jose", "campos"];
    // tipo => tuple
    var tuples;
    tuples = ["leonardo", 12345];
    document.getElementById("info").innerHTML = tuples[0];
    var tuples2;
    tuples2 = ["leonardo", 35];
    tuples2[0]; // string
    tuples2[1]; // Number 
    // enums
    var carteraMotorista = EnumTipoDocumento.CarteraMotorista;
    var cpf = EnumTipoDocumento.CPF;
    var rg = EnumTipoDocumento.RG;
    var valorDeQualquerTipo = "leonardo";
    valorDeQualquerTipo = 43;
}
var Genero;
(function (Genero) {
    Genero[Genero["Masculino"] = 1] = "Masculino";
    Genero[Genero["Feminino"] = 2] = "Feminino";
})(Genero || (Genero = {}));
var Pontos;
(function (Pontos) {
    Pontos[Pontos["Derrota"] = 0] = "Derrota";
    Pontos[Pontos["Empate"] = 1] = "Empate";
    Pontos[Pontos["Vitoria"] = 3] = "Vitoria";
})(Pontos || (Pontos = {}));
var EnumTipoDocumento;
(function (EnumTipoDocumento) {
    EnumTipoDocumento[EnumTipoDocumento["RG"] = 1] = "RG";
    EnumTipoDocumento[EnumTipoDocumento["CPF"] = 2] = "CPF";
    EnumTipoDocumento[EnumTipoDocumento["CarteraMotorista"] = 3] = "CarteraMotorista";
})(EnumTipoDocumento || (EnumTipoDocumento = {}));
