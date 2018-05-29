var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function Executar() {
    var nome_1 = ["leo", "campos"];
    var nome_2 = ["priscila", "nunes"];
    var nomes = ["junior"].concat(nome_1, nome_2, ["jose", "prado"]);
    document.write(JSON.stringify(nomes));
    var pessoa = {
        nome: "leo",
        apelido: "campos",
        idade: 35
    };
    document.write("<br><br>");
    document.write(JSON.stringify(nomes));
    document.write("<br><br>");
    var nova_pessoa = __assign({}, pessoa, { profissao: "Desenvolvedor .net", certificado: false, nome: "Leonardo override da propriedade" });
    document.write(JSON.stringify(nova_pessoa));
}
