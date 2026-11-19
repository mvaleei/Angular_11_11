import { IIndirizzo } from "./IIndirizzo";

export interface IUtente {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IIndirizzo
}