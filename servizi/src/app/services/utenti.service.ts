import {
    Injectable,     //il decorator per creare il servizio (le propeità e la classe)
    inject          //iniettare il moulo httpclient nella classe
} from "@angular/core";


import { HttpClient } from "@angular/common/http";  //per effettaure le chiamatae http


import { IUtente } from "../intefacce/IUtente";     //per serializzare/deserializzare

import { Observable } from "rxjs";      //oggetto che gestisce dati asincroni


@Injectable(
    {
        providedIn: 'root'
    }
)

export class UtentiService {

    //crea l'oggetto che effettuerà la VERA chiamata al servizio (http)
    private readonly http = inject(HttpClient);

    //dichiariamo l'url da contattare
    url: string = "https://jsonplaceholder.typicode.com/users"

    //creo il metodo che restituiràò di dati della chiamata di tpo get 
    getUtenti(): Observable<Array<IUtente>> {
        return this.http.get<Array<IUtente>>(this.url);
    }


    inviaPost(nuovoUtente: IUtente): Observable<IUtente> {
        return this.http.post<IUtente>(this.url, nuovoUtente);
    }



}
