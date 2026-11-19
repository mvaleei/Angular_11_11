import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Saldo } from '../saldo/saldo';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operazione',
  imports: [Saldo, FormsModule],
  templateUrl: './operazione.html',
  styleUrl: './operazione.css',
})
export class Operazione {

  @Input() saldo: number = 0


  @Output() eventoImporto = new EventEmitter<number>()

  importo: number = 0


  @Input() utente: number = 0  // 0 = utente che preleva    | 1 = utente che versa   | 3 = utnete master che preleva

  nuovoSaldo(): void {

    if (this.utente == 0) {
      let saldoIpotetico: number = this.saldo - this.importo
      if (saldoIpotetico < 0) {
        alert("Attenzione fondi non disponibili");
      }
      else {
        this.eventoImporto.emit(saldoIpotetico);
      }
    }
    else if (this.utente == 3) {
      this.eventoImporto.emit(this.saldo - this.importo);
    }
    else {
      let saldoIpotetico: number = this.saldo + this.importo

      if (saldoIpotetico > 500) {
        alert("Attenzione superata la soglia di budget");
      }
      else {
        this.eventoImporto.emit(saldoIpotetico);
      }
    }


  }

}
