import {
    Pipe,
    PipeTransform
} from "@angular/core";



@Pipe(
    {
        name: "changeLettera" // il nome che verrà utilizzato dentro il file htmnl (uppercase)
    }
)
export class CambiaLettera implements PipeTransform {


    transform(nomeRicevuto: string, letteraDaCambiare: string) {

        return nomeRicevuto.replace(letteraDaCambiare, "D");

    }


}