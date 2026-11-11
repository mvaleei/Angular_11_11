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

interface persona {
    id: number,
    nome: string,
    citta: string,
    maggiorenne: boolean
}

var MarioRossi: persona = {
    id: 1,
    nome: "Mario Rossi",
    citta: "Palermo",
    maggiorenne: true
}

var GiuseppeVerdi: persona = {
    maggiorenne: false,
    citta: "Parma",
    id: 2,
    nome: "Giuseppe Verdi"
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
        nome: "Angelo Datini"
    }
)

console.log(anagrafica)

CarloCarlini.citta = "Pordenone"

console.log(anagrafica)

var FabioFabietti = MarioRossi

FabioFabietti.nome = "Fabio Fabietti";

anagrafica.push(FabioFabietti);
console.log(anagrafica);