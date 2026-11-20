import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fornitori',
  imports: [],
  templateUrl: './fornitori.html',
  styleUrl: './fornitori.css',
})
export class Fornitori implements OnInit {

  constructor(private leggiQuery: ActivatedRoute) { }

  nomeFornitore: string = "Valore iniziale"
  fatturato: number = 88


  ngOnInit(): void {

    this.leggiQuery.queryParams.subscribe(
      (coppie) => {
        this.nomeFornitore = coppie['nomeFornitore'];
        this.fatturato = coppie['importoFatturato']

      }
    )

  }

}
