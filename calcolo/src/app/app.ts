import { Component, signal } from '@angular/core';


import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  baseFigura: number = 0

  altezzaFigura: number = 0

  figura: number = 0

  area: number = 0


  calcoloArea(): void {

    this.area = this.altezzaFigura * this.baseFigura / this.figura

  }

}
