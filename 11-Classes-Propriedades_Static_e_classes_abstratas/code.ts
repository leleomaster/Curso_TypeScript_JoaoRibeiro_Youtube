function Executar(): void {

    let f = new Familia_kennedy("Leo");

    let f_static = Familia_kennedy._apelido;

    console.log(f);
    console.log(f.Nome);
    console.log(f_static);

    let h = new Homem();
    let m = new Mulher();

    console.log(` Mulher  ${m.falar()}`);
    console.log(m.Assistir());

    console.log(` Homem  ${h.falar()}`);
    console.log(h.Assistir());
}

abstract class Humano {
    nome: string;
    idade: number;

    falar(): string {
        return "Eu falei";
    }
    abstract Assistir(): string;
}

class Homem extends Humano {
    Assistir():string{
        return "A maioria dos homens assiste futebol";
    }
}

class Mulher extends Humano {
    Assistir():string{
        return "A maioria das mulheres assiste novela";
    }
}


class Familia_kennedy {
    private _nome: string;

    static _apelido: string = "Kennedy";

    constructor(n: string) {
        this._nome = n + " " + Familia_kennedy._apelido;
    }

    get Nome() {
        return this._nome;
    }
}
