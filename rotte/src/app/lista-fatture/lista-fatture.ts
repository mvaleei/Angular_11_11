import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-fatture',
  imports: [],
  templateUrl: './lista-fatture.html',
  styleUrl: './lista-fatture.css',
})
export class ListaFatture {

  listato: Array<string> = ["1 - Mario Rossi - Computer - 2400", "2 - Giuseppe Verdi - Monitor - 950"]

}
