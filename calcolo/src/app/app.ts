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

  figura: string = ""

  area: number = 0


  calcoloArea(): void {

    var divisione: Array<string> = this.figura.split(":")

    this.area = this.altezzaFigura * this.baseFigura / parseInt(divisione[1])


    //Il calcolo dell'area della figura di tipo: xxxx è: (calcolo)

    //transpilazione

  }

}
