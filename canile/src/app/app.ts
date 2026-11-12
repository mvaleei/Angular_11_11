import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IRazza, aggres } from './Interfacce/IRazza';
import { IDog } from './Interfacce/IDog';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  canileArchivio: Array<IDog> = []


  tipo: Array<IRazza> = aggres;

  nome: string = ""
  anni: number = 0
  box: number = 0
  razzaScelta: number = 0

  media: number = 0

  addDog(): void {


    //let tipo: string = "Lupo"

    //funzione filter
    let datiFiltrati: Array<IRazza> = this.tipo.filter(

      /*
      (razzaLetta: IRazza) => {

        if (tipo === "d") {
          return razzaLetta.descrizione === "Lupo"
        }
        else {
          return razzaLetta.descrizione != "Lupo"
        }
        
        if (1=11){
          return condzione12
        }
        else
          return condizone2
        
        //return razzaLetta.id === this.razzaScelta
      }
      */

      (razzaLetta: IRazza) => razzaLetta.id == this.razzaScelta
    )

    console.log(datiFiltrati);

    let nuovoCane: IDog = {
      idDog: this.canileArchivio.length + 1,
      anni: this.anni,
      box: this.box,
      nome: this.nome,
      razza: datiFiltrati[0]
    }

    //console.log(nuovoCane);

    if (this.checkBox().length < 2) {
      this.canileArchivio.push(nuovoCane);

      let somma: number = 0;

      for (let cane of this.canileArchivio) {
        somma += cane.anni
      }

      this.media = somma / this.canileArchivio.length
    }
    else {
      alert("Attenzione, box già occupato")
    }


  }


  checkBox(): Array<IDog> {

    //let filtrati: Array<IDog> = []

    /*    programmazione imperativa
    for (let dog of this.canileArchivio) {
      if (dog.box == this.box) {
        filtrati.push(dog)
      }
    }
      */

    let filtrati: Array<IDog> = this.canileArchivio.filter(
      (dogLetto: IDog) => dogLetto.box == this.box
    )

    return filtrati

  }


}
