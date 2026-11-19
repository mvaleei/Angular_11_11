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

}
