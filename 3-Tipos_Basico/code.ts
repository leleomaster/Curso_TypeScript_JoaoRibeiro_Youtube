function Executar() {
    let nome = "Leonardo";
    // valor = 43;// Compila e gera o arquivo .js, mas imprime um "possível erro".
    document.getElementById("info").innerHTML = nome;
}

/*
    Tipo de dados Typescript
*/

function TipoDados() {
    let boleano: boolean = false;  // .toString()
    let inteiro: number = 100;     // .toString()
    let textos: string = "leonardo com aspas duplas";
    let textos2: string = "leonardo com simples";

    let primeiro_nome: string = "leonardo";
    let segundo_nome: string = "campos";

    // Template
    let nome_completo = `${primeiro_nome} - ${segundo_nome}`;

    let nomes: string[] = ["leo", "silva", "jose", "campos"];// tamanho/lenght 3

    document.getElementById("info").innerHTML = nomes[2];

    let apelidos: Array<string> = ["leo", "silva", "jose", "campos"];

    // tipo => tuple
    let tuples: [string, number];

    tuples = ["leonardo", 12345]
    document.getElementById("info").innerHTML = tuples[0];

    let tuples2: [string, number];
    tuples2 = ["leonardo", 35];

    tuples2[0];// string
    tuples2[1];// Number 

    // enums
    let carteraMotorista: EnumTipoDocumento = EnumTipoDocumento.CarteraMotorista;
    let cpf: EnumTipoDocumento = EnumTipoDocumento.CPF;
    let rg: EnumTipoDocumento = EnumTipoDocumento.RG;

    let valorDeQualquerTipo : any = "leonardo";

    valorDeQualquerTipo = 43;
    
}

enum Genero {
    Masculino = 1,
    Feminino = 2
}

enum Pontos {
    Derrota = 0,
    Empate = 1,
    Vitoria = 3
}

enum EnumTipoDocumento {
    RG = 1,
    CPF = 2,
    CarteraMotorista = 3
}