function Executar() {
    let valores = ["leonardo", "campos"];

    let [nome, apelido] = valores;

    document.getElementById("info").innerHTML = teste(["leo", "jose"]);
}

function teste([nome, apelido]: [string, string]): string {
    return `${nome} - ${apelido} `;
}

// tsc code --target es5
//  OU
// tsc code --target es6