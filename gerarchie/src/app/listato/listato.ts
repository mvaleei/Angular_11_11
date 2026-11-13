import { Component } from '@angular/core';

import { IFattura } from '../interfacce/IFattura';

import { UpperCasePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-listato',
  imports: [
    UpperCasePipe,
    CurrencyPipe
  ],
  templateUrl: './listato.html',
  styleUrl: './listato.css',
})
export class Listato {

  contab: Array<IFattura> = [
    {
      numero: 1,
      cliente: "Mario Rossi",
      descrizione: "Computer fisso I9",
      importo: 3500
    },
    {
      numero: 2,
      cliente: "Giuseppe Verdi",
      descrizione: "Monitor 40''",
      importo: 850
    },
    {
      numero: 3,
      cliente: "Angelo Bianchi",
      descrizione: "Processore I7 ''",
      importo: 1100
    }, {
      numero: 4,
      cliente: "Carlo Fantelli",
      descrizione: "Stampante laser",
      importo: 650
    },

  ]

}
