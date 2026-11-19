import { Component, signal } from '@angular/core';


import { Saldo } from './saldo/saldo';

import { Operazione } from './operazione/operazione';

@Component({
  selector: 'app-root',
  imports: [Operazione, Saldo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  saldo: number = 300;


  riceviImporto(nuovoImporto: number): void {
    this.saldo = nuovoImporto;
  }


}
