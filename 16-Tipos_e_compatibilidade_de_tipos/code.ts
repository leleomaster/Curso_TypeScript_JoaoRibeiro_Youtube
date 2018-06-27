function Executar(): void {

    let a = "Leo";
    let b = "Campos";
    let c = 100;
    let d = true;
    let array = [1, "2", 3, "leo"];

    document.writeln(typeof (a));
    document.writeln(typeof (b));
    document.writeln(typeof (c));
    document.writeln(typeof (d));
    document.writeln(typeof (Sentidos));
    document.writeln(typeof (Sentidos.baixo));
    document.writeln(typeof (Sentidos[2]));
    document.writeln(typeof (array));

    let p = new Pessoa();
    document.writeln(typeof (p));
   
    let ani = new Animal();
    document.writeln(typeof (ani));
}

interface Humano{
    nome: string;
    altura: string;
}

class Pessoa {
    nome: string;
    altura: string;
}

class Animal {
    nome: string;
    altura: string;
}

enum Sentidos {
    cima = 0,
    baixo = 1,
    esquerda = 2,
    direita = 3
}


