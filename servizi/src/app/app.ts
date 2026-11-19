import { Component, signal } from '@angular/core';


import { Consumo } from './consumo/consumo';

@Component({
  selector: 'app-root',
  imports: [Consumo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('servizi');
}
