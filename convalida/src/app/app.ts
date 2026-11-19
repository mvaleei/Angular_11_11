import { Component, signal } from '@angular/core';


import { CommonModule } from '@angular/common'

import {
  FormGroup,                //la struttura del singolo "record"    //gestisce tutti i dati del form
  FormControl,               // il singolo campo del record          //dato del singolo input
  Validators                  //per aggiungere le regole di convalida ad ogni campo
} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,   //il modulo che gestisce il passaggio grafica logica
    ReactiveFormsModule   //il modulol he gestisce la mappatura di dati struttura
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //l'oggetto che contertrà tutti i dati proveniente dal form (grafica)
  persone: Array<FormGroup> = []   //tabella


  //struttura del singolo oggetto che verrà inserito  in persone
  contactForm: FormGroup = new FormGroup(
    {
      cognome: new FormControl("Rossi", [Validators.required, Validators.minLength(3)]),
      nome: new FormControl("Mario", [Validators.maxLength(15)]),
      anni: new FormControl(18, [Validators.min(18)])
    }
  )

  //metodo che recupera tutti i dati inseriti nella grafica
  registra(): void {
    console.log(this.contactForm.value);
  }

}
