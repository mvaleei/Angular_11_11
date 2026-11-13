

import { Pipe, PipeTransform } from "@angular/core";
import { IFattura } from "../app/interfacce/IFattura";

@Pipe(
    {
        name: "calcolaIva"
    }
)

export class calcolaIva implements PipeTransform {

    transform(fattura: IFattura): number {

        if (fattura.fatturabile) {
            return fattura.importo + fattura.importo * 22 / 100
        }
        else {
            return fattura.importo
        }
    }

}