// export interface Pessoa {
interface Pessoa {
    nome: string;
    altura: string;
    idade: number;
}

//export enum enumSexo {
enum enumSexo {
    MASCULINO,
    FEMININO
}

// export class Humano {
class Humano {
    nome: string;
    sexo: enumSexo;
}

//isso 
export { Pessoa, Humano, enumSexo };
// ou import * as code "./Codigo" no arquivo ts que você quer usar essas estruturas







