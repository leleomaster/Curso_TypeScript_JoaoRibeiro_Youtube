
namespace terrestres {
    export interface Animal {
        especie: string;
        nome: string;
    }
}

namespace maritimo {
    export interface Animal {
        especie: string;
        nome: string;
        movimento();
    }
}

export { maritimo, terrestres };

let terrestresAnimal: terrestres.Animal;

let maritimoAnimal: maritimo.Animal;




