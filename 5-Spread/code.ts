function Executar(): void {
    let nome_1 = ["leo", "campos"];
    let nome_2 = ["priscila", "nunes"];

    let nomes = ["junior", ...nome_1, ...nome_2, "jose", "prado"]

    document.write(JSON.stringify(nomes));

    let pessoa = {
        nome: "leo",
        apelido: "campos",
        idade: 35
    }
    document.write("<br><br>");
    document.write(JSON.stringify(nomes));

    document.write("<br><br>");
    let nova_pessoa = {
        ...pessoa,
        profissao: "Desenvolvedor .net",
        certificado: false,
        nome: "Leonardo override da propriedade"
       
    }

    document.write(JSON.stringify(nova_pessoa));
}