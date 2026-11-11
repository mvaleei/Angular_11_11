var lavoro: string = "Dirigente"
console.log(lavoro)

var anni: number = 42
console.log(anni);

//anni = "23"  


var maggiorenne: boolean = true
console.log(maggiorenne)

var voti: Array<number> = [25, 29, 30, 16]

console.log(voti)

console.log(typeof (voti))


var anonima: any = "Firenze"

anonima = 15
anonima = false

console.log(typeof (anonima))

interface sport {
    descrizione: string,
    anniPraticato: number
}

interface persona {
    id: number,
    nome: string,
    citta: string,
    maggiorenne: boolean,
    sports?: Array<sport>
}

var MarioRossi: persona = {
    id: 1,
    nome: "Mario Rossi",
    citta: "Palermo",
    maggiorenne: true,
    sports: [
        {
            descrizione: "Calcio",
            anniPraticato: 5
        }
    ]
}

var GiuseppeVerdi: persona = {
    maggiorenne: false,
    citta: "Parma",
    id: 2,
    nome: "Giuseppe Verdi",
    sports: [
        {
            descrizione: "Tennis",
            anniPraticato: 10
        },
        {
            descrizione: "Pallavolo",
            anniPraticato: 4
        },
    ]
}


var CarloCarlini: persona = {
    maggiorenne: false,
    citta: "Caserta",
    id: 3,
    nome: "CarloCarlini"
}


var anagrafica: Array<persona> = [
    MarioRossi, GiuseppeVerdi, CarloCarlini
]

console.log(typeof (anagrafica))
console.log(anagrafica)


anagrafica.push(
    {
        citta: "Roma",
        id: 4,
        maggiorenne: true,
        nome: "Angelo Datini",
        sports: [{
            descrizione: "Pallavolo",
            anniPraticato: 7
        }],
    }
)

console.log(anagrafica)

CarloCarlini.citta = "Pordenone"

console.log(anagrafica)

var FabioFabietti = MarioRossi

FabioFabietti.nome = "Fabio Fabietti";

anagrafica.push(FabioFabietti);
console.log(anagrafica);


console.log("Gestione O.O.P.--------------------------")

class appartamento {
    mq: number = 0
    citta: string = ""
    indirizzo: string = ""
    private proprietario: string = ""

    constructor(prop: string, mqRicevuti: number, cittaRicevuta: string, addressRicevuto: string) {
        this.mq = mqRicevuti
        this.citta = cittaRicevuta
        this.indirizzo = addressRicevuto
        this.proprietario = prop
    }

    dettagli(): string {
        //return "citta:" + this.citta + " - indirizzo:" + this.indirizzo + " - mq:" + this.mq
        return '"citta:"' + this.citta + ' - "indirizzo:"' + this.indirizzo + ' - "mq:"' + this.mq

        //backtik   alt+96
        return `"Citta:" ${this.citta} - "Indirizzo:" ${this.indirizzo} - 'mq:' ${this.mq} - Proprietario: ${this.proprietario} `
    }

}


var portuense = new appartamento("Angelo Baldini", 120, "Roma", "Via Portuense, 55")
var ostiense = new appartamento("Renato Zero", 85, "Roma", "Via Ostiense, 152")

var immobili: Array<appartamento> = [
    portuense, ostiense
]

for (var indice: number = 0; indice < immobili.length; indice++) {
    console.log(immobili[indice].dettagli())
}


console.log(immobili)


class villa extends appartamento {

    trattativa: string  // = "Privata"

    static calcolo(): number {
        return 10 * 50
    }

    constructor(
        prop: string,
        mqRicevuti: number,
        cittaRicevuta: string,
        addressRicevuto: string,
        tratt: string
    ) {
        super(prop, mqRicevuti, cittaRicevuta, addressRicevuto)
        this.trattativa = tratt
    }

}

var eur = new villa("Fabio Angiolini", 220, "Roma", "Viale Europa, 24", "Privata")
console.log(eur.dettagli())

console.log(villa.calcolo())