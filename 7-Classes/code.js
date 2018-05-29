function Executar() {
    let automovel = new Veiculo(2013, "VW");
    automovel.ano = 2010;
    automovel.marca = "GM";
    document.write(automovel.mover());
}
class Veiculo {
    constructor(ano, marca) {
        this.ano = ano;
        this.marca = marca;
    }
    mover() {
        return "Moveu";
    }
}
