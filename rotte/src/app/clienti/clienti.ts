import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clienti',
  imports: [],
  templateUrl: './clienti.html',
  styleUrl: './clienti.css',
})
export class Clienti implements OnInit, OnDestroy {

  constructor(private rotta: ActivatedRoute) { }

  ngOnInit(): void {
    //alert("Posso eseuire codice prima che il componente venga installato")
    this.nomeCliente = this.rotta.snapshot.params['nomecliente']
    this.importoFatturato = this.rotta.snapshot.params['fatturato']
  }


  ngOnDestroy(): void {
    //alert("Sto per distruggere il componente")
  }

  nomeCliente: string = ""
  importoFatturato: number = 0

}
