function Executar(): void {
    let h = new Homem("lEONARDO");

    h.getNome();

}

class Homem {
    readonly nome: string;

    private _idade: number;

    constructor(n: string) {
        this.nome = n;
    }

    getNome(): string {
        return this.nome;
    }

    getIdade(): string {
        return this._idade;
    }

    setIdade(idade: number): void {
        this._idade = idade;
    }

    setNome(nome: number): void {
        if (nome.startsWith("_")) {
            this.nome = "Não pode começar com underine";
        }
        else {
            this._idade = idade;
        }
    }

}