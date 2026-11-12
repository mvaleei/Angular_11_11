import { IRazza } from "./IRazza";

export interface IDog {
    idDog: number,
    nome: string,
    anni: number,
    razza: IRazza,
    box: number
}