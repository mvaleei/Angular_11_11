import { Component, Input } from '@angular/core';

import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-saldo',
  imports: [CurrencyPipe],
  templateUrl: './saldo.html',
  styleUrl: './saldo.css',
})
export class Saldo {

  @Input() saldoRicevuto: number = 0

}
