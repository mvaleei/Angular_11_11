import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Figlio } from './figlio/figlio';

import { FormsModule } from '@angular/forms';

import { Listato } from './listato/listato';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Figlio,
    FormsModule,
    Listato
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('gerarchie');

  generale: Array<number> = [20, 30, 60, 90]

  cittaDalPadre: string = "Firenze";


  anniDigitati: number = 0

}
