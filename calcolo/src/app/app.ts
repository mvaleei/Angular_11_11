import { Component, signal } from '@angular/core';


import { FormsModule } from '@angular/forms';

import { IPersona } from './Interfacce/IPersona';
import { NumericLiteral } from 'typescript';

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


  anagrafica: Array<IPersona> = [

    {
      anni: 49,
      cognome: "Rossi",
      nome: "Mario",
      id: 1
    },
    {
      anni: 37,
      cognome: "Verdi",
      nome: "Andrea",
      id: 2
    },
    {
      anni: 65,
      cognome: "Gialli",
      nome: "Fabio",
      id: 3
    }

  ]

  //nuovo: IPersona = {
  //id:number= 0,
  anniInseriti: number = 0
  cognomeInserito: string = ""
  nomeInserito: string = ""
  //}

  addPersona(): void {

    //let nuovoMio:IPersona =nuovo
    let nuovo: IPersona = {
      cognome: this.cognomeInserito,
      nome: this.nomeInserito,
      anni: this.anniInseriti,
      id: this.anagrafica.length + 1
    }
    this.anagrafica.push(nuovo);
  }

}
