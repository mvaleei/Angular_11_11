import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Figlio } from './figlio/figlio';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Figlio
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('gerarchie');

  generale: Array<number> = [20, 30, 60, 90]

}
