import { Injectable } from "@angular/core";
import { inject } from "@angular/core";



import { HttpClient } from "@angular/common/http";

import { IUtente } from "../interfacce/IUtente";

import { Observable } from "rxjs";


@Injectable(
    {
        providedIn: 'root'
    }
)


export class utentiService {


    private readonly chiamante = inject(HttpClient)

    url: string = "https://jsonplaceholder.typicode.com/users"

    getUsers(): Observable<Array<IUtente>> {

        return this.chiamante.get<Array<IUtente>>(this.url);
    }



}