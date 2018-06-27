function Executar() {
    var nomes = ["joao", "ana", "carlos", "daniela", "sofia"];
    var elemento = document.getElementById("info");
    elemento.innerHTML = "";
    // Padrão
    elemento.innerHTML += " <br>  for(let i = 0; i < nomes.length; i++) <br> ";
    for (var i = 0; i < nomes.length; i++) {
        elemento.innerHTML += nomes[i] + " - ";
    }
    elemento.innerHTML += " <br>  nomes.forEach(function (e) <br> ";
    // Novo
    nomes.forEach(function (e) {
        elemento.innerHTML += e + " - ";
    });
    elemento.innerHTML += " <br>  nomes.forEach(nome =>{ <br> ";
    // Novo
    // for arrow function
    nomes.forEach(function (nome) {
        elemento.innerHTML += nome + " - ";
    });
    elemento.innerHTML += " <br>  for(let nome of nomes) <br> ";
    // for ...of
    // apresenta os nomes
    for (var _i = 0, nomes_1 = nomes; _i < nomes_1.length; _i++) {
        var nome = nomes_1[_i];
        elemento.innerHTML += nome + " - ";
    }
    elemento.innerHTML += " <br>  for(let nome in nomes) <br> ";
    // for ...in
    // apresenta o indexs, e nao os nomes
    for (var index in nomes) {
        elemento.innerHTML += index + " - ";
    }
}
