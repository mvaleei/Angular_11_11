import { Component, Input } from '@angular/core';
import { IFattura } from '../interfacce/IFattura';

@Component({
  selector: 'app-dettaglio',
  imports: [],
  templateUrl: './dettaglio.html',
  styleUrl: './dettaglio.css',
})
export class Dettaglio {

  @Input() fatturaRicevuta: IFattura = {
    cliente: "",
    descrizione: "",
    fatturabile: false,
    importo: 0,
    numero: 0
  }

  visualizza: boolean = false


  viewValue() {
    this.visualizza = !this.visualizza
  }

}
