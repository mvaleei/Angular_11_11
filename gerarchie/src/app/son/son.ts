import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-son',
  imports: [FormsModule],
  templateUrl: './son.html',
  styleUrl: './son.css',
})
export class Son {

  lavoroInserito: string = ""


  @Output() eventoFiglio = new EventEmitter<string>();    //>ArrayList<T>

  inviaAlPadre(): void {
    this.eventoFiglio.emit(this.lavoroInserito);
  }

  anniInseriti: number = 0


  //creo un oggetto di tipo EVENTO
  @Output() eventoAnni = new EventEmitter<number>();

  inviaAnniAlpadre(): void {
    //scateniamo l'evento anni, per passare il valore al padre
    this.eventoAnni.emit(this.anniInseriti);
  }


  inviaAll(): void {
    //this.inviaAlPadre()
    //this.inviaAnniAlpadre()
    this.eventoFiglio.emit(this.lavoroInserito);
    this.eventoAnni.emit(this.anniInseriti);
  }

}
