function Executar(): void {

    let _animal: animal = new animal(enumTipoAnimal.cavalo);

    document.write(_animal.mover(200));

    let _cavalo: animal = new cavalo(enumTipoAnimal.cavalo);

    document.write("<br><br>");
    document.write(_cavalo.mover(150));

    let _peixe: animal = new peixe(enumTipoAnimal.peixe);

    document.write("<br><br>");
    document.write(_peixe.mover(1006));
}

class animal {
    designacao: enumTipoAnimal;

    constructor(designacao: enumTipoAnimal) {
        this.designacao = designacao;
    }

    mover(metros: number) {
        return `Eu desloquei-me ${metros} metros`;
    }
}

class cavalo extends animal {
    constructor(designacao: enumTipoAnimal) {
        super(designacao);
    }
    mover(metros: number): string {
        return ` A cavalgar ... ${super.mover(metros)}`;
    }
}

class peixe extends animal {
    constructor(designacao: enumTipoAnimal) {
        super(designacao);
    }
    mover(metros: number): string {
        return ` A nadar ... ${super.mover(metros)}`;
    }
}

enum enumTipoAnimal {
    cavalo = 1,
    peixe = 2
}
