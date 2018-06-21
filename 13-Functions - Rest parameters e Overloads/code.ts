function Executar(): void {

    let nomeCompleto = ListaNome("Leonardo", "Campos");

    let nomes = ListaNomeRest("Leonardo", "Rest 1", "Rest 2", "Rest 3");
    console.log(nomes);

    let nomes2 = Juntar("leleo ", " prado");
    let resultado = Juntar(10, 20);

    console.log(nomes2);
    console.log(resultado);
}

// Overload
function Juntar(x: any, y: any): any {
    return x + y;
}

function ListaNome(nome: string, apelido: string): string {

    return `${nome} ${apelido}`;
}

// Rest = restante
function ListaNomeRest(nome: string, ...restante: string[]): string {

    return `${nome} ${restante}`;
}
