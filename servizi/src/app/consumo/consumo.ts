import { Component, signal } from '@angular/core';

import { IUtente } from '../intefacce/IUtente';

@Component({
  selector: 'app-consumo',
  imports: [],
  templateUrl: './consumo.html',
  styleUrl: './consumo.css',
})
export class Consumo {

  listaUtenti = signal<Array<IUtente>>([])

  carica(): void {

  }

}
