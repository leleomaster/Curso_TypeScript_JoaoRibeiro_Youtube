function Executar() {
    function pessoa(dados) {
        var resultado;
        if (dados.nome) {
            resultado = dados.nome;
        }
        else if (dados.apelido) {
            resultado += dados.apelido;
        }
        return dados.nome + " " + dados.apelido;
    }
    var d = { nome: "leo" };
    document.getElementById("info").innerHTML = pessoa(d);
    var d2 = { nome: "leo", apelido: "leleo" };
    document.getElementById("info").innerHTML = pessoa(d2);
    var posicao = { x: 100, y: 200 };
    document.write(posicao.y + " - " + posicao.y);
}
