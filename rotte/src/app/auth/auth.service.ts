//unico scopo restituire true/false (per autorizzazione)  

import { Injectable } from "@angular/core";


@Injectable()
export class AuthService {

    //in questa classe, dobbiamo scrivere il codice per verificare 
    //se le credenziali siano corrette
    //restituire:
    //true se è autenticato
    //false se non autenticato

    public isAuthenticated(): boolean {
        return true;
    }

}