import { Component } from '@angular/core';

import { Son } from '../son/son';

@Component({
  selector: 'app-father',
  imports: [Son],
  templateUrl: './father.html',
  styleUrl: './father.css',
})
export class Father {


  lavoro: string = "Info base del father"

  riceviLavoroDalFiglio(lavoroScrittoNelFiglio: string): void {
    this.lavoro = lavoroScrittoNelFiglio;
  }


  anniRicevuti: number = 0
  riceviAnniDalFiglio(anniRicevutiDalFiglio: number): void {
    this.anniRicevuti = anniRicevutiDalFiglio;
  }


}
