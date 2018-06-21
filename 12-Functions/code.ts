function Executar(): void {

    console.log(Multiplicar(10, 15));

    // função anônima
    let resultado = function (c, d) {
        return c + d;
    }

    let adicao: (a: number, b: number) => number =
        function (a: number, b: number): number { return a + b; }

    adicao(10, 30);

    let resul2 = Adicionar2(50);// Retorna NaN, porque não passou o valor para "b" e a = 50 + b = null/underfined = NaN

}

function Multiplicar(a: number, b: number) {
    return a * b;
}

function Adiconar(a: number, b: number): number {
    return a + b;
}

function Adicionar2(x, y) {
    return x + y;
}

function NomeCompleto(nome: string, apelido: string): string {
    let nomeCompleto = "";

    if (apelido) {
        nomeCompleto = `${nome} ${apelido}`;
    } else {
        nomeCompleto = nome;
    }

    return nomeCompleto;
}

// Parametros opcionais
function NomeCompleto2(nome: string, apelido: string = "Campos"): string {
   
    return `${nome} ${apelido}`;   
}

