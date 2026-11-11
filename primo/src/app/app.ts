import { Component, signal } from '@angular/core';


import { FormsModule } from '@angular/forms'; //  modulo per il binding two way

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  //template: "<h1>Ciao da me</h1>",
  styleUrl: './app.css'
})


export class App {


  cittaNascita: string = "Pescara"


  anni: number = 16

  metodoMio(): void {
    alert("Città di nascita:" + this.cittaNascita)
  }

  cognome: string = "Gialli"

}

