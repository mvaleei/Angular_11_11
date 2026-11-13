import { Component } from '@angular/core';

import { IFattura } from '../interfacce/IFattura';

import { UpperCasePipe, CurrencyPipe } from '@angular/common';

import { CambiaLettera } from '../../Shared/cambiaLettera';

import { calcolaIva } from '../../Shared/ivato';

import { Dettaglio } from '../dettaglio/dettaglio';

@Component({
  selector: 'app-listato',
  imports: [
    UpperCasePipe,
    CurrencyPipe,
    CambiaLettera,
    calcolaIva,
    Dettaglio
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
      importo: 3500,
      fatturabile: true
    },
    {
      numero: 2,
      cliente: "Miuseppe Verdi",
      descrizione: "Monitor 40''",
      importo: 850,
      fatturabile: false
    },
    {
      numero: 3,
      cliente: "Angelo Bianchi",
      descrizione: "Processore I7 ''",
      importo: 1100,
      fatturabile: true
    }, {
      numero: 4,
      cliente: "Carlo Fantelli",
      descrizione: "Stampante laser",
      importo: 650,
      fatturabile: false
    },

  ]

}
