function Executar(): void {
    let pessoa = new Humano("Leonardo");

    document.write(pessoa.falar("Papai"));
    document.write(pessoa.andar());// Cria o javascript e não ocorre erro.

    let _homem = new Homem("leo");

    _homem.setIdade(35);
    document.write(_homem.getIdade());
    
    let _mulher = new mulher("priscila");

    _mulher.setIdade(32);
    document.write(_mulher.getIdade());

}

class Humano {
    nome: string
    protected idade: number

    constructor(n: string) {
        this.nome = n;
    }

    setIdade(idade: number): void {
        this.idade = idade;
    }

    getIdade(): number {
        return this.idade;
    }

    public falar(texto: string) {
        return `${this.nome} disse ${texto}`;
    }

    private andar() {
        return `${this.nome} andou`;
    }
}

class Mulher extends Humano {

}

class Homem extends Humano {

}