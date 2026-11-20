import { Component, signal } from '@angular/core';

import { IUtente } from '../intefacce/IUtente';
import { UtentiService } from '../services/utenti.service';

@Component({
  selector: 'app-consumo',
  imports: [],
  templateUrl: './consumo.html',
  styleUrl: './consumo.css',
})
export class Consumo {

  constructor(private _utentiService: UtentiService) { }

  listaUtenti = signal<Array<IUtente>>([])

  carica(): void {

    this._utentiService.getUtenti().subscribe(
      {
        next: (dato) => this.listaUtenti.set(dato),
        error: (errore) => console.log(errore)
      }
    )
  }


  nuovoPost(): void {
    let newUtente: IUtente = {
      id: 999,
      name: "Prova nome",
      email: "email@email.it",
      username: "username mio",
      address: {
        city: "new york",
        street: "Vias della prova",
        suite: "Imperiale",
        zipcode: "00100"
      }
    }


    this._utentiService.inviaPost(newUtente).subscribe(
      {
        next: (utenteRicevuto: IUtente) => console.log(utenteRicevuto)
      }
    )
  }

}
