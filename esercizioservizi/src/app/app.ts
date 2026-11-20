import { Component, signal } from '@angular/core';

import { IUtente } from './interfacce/IUtente';

import { utentiService } from './services/utenti.service';

import { FormsModule } from '@angular/forms';

import { postsService } from './services/posts.service';

import { Ipost } from './interfacce/IPost';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(
    private _utentiService: utentiService,
    private _postsService: postsService
  ) { }

  listautenti = signal<Array<IUtente>>([]);   //gli oggetti presenti nello state non possono essere assegnati a null


  idUtenteScelto: number = 0

  caricaUtenti(): void {
    //alert("Carico gli utenti")  
    this._utentiService.getUsers().subscribe(
      {
        next: (lista) => this.listautenti.set(lista)
      }
    )

  }


  listaPosts = signal<Array<Ipost>>([])

  caricaPost(): void {
    //alert("Carico i posts")
    this._postsService.getPosts().subscribe(
      {
        //next: (dato) => this.listaPosts.set(dato)
        /*
        next: (dato) => {
          //ottengo un nuovo oggetto filtrando i dati che arrvano dal servizio
          let filtri: Array<Ipost> = dato.filter(
            (post: Ipost) => post.userId == this.idUtenteScelto
          )
          this.listaPosts.set(filtri);
        }
          */

        next: (dato) => this.listaPosts.set(
          dato.filter(
            (p: Ipost) => p.userId == this.idUtenteScelto
          )
        )
      }
    )
  }


}
