function Executar(): void {

    let automovel: Veiculo = new Veiculo(2013, "VW");

    automovel.ano = 2010;
    automovel.marca = "GM";

    document.write(automovel.mover());
}

class Veiculo {
    marca: string;
    ano: number;

    constructor(ano: number, marca: string) {
        this.ano = ano;
        this.marca = marca;
    }

    mover() {
        return "Moveu";
    }
}

