function Executar(): void {

    document.write(apresentar("Leonardo"))

    document.write(Funcao_Generica<string>("Função genérica :) "));


}

// Não genérico
function apresentar(valor: string): string {
    return valor;
}


// É genérico
function Funcao_Generica<T>(valor: T): T {
    return valor;
}
