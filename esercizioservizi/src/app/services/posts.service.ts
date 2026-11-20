import { Injectable, inject } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { Ipost } from "../interfacce/IPost";

import { Observable } from "rxjs";

@Injectable(
    {
        providedIn: 'root'
    }
)

export class postsService {


    private readonly chiamaPosts = inject(HttpClient);

    url: string = "https://jsonplaceholder.typicode.com/posts";

    getPosts(): Observable<Array<Ipost>> {
        return this.chiamaPosts.get<Array<Ipost>>(this.url)
    }

}