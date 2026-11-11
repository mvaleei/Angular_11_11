var lavoro = "Dirigente";
console.log(lavoro);
var anni = 42;
console.log(anni);
//anni = "23"  
var maggiorenne = true;
console.log(maggiorenne);
var voti = [25, 29, 30, 16];
console.log(voti);
console.log(typeof (voti));
var anonima = "Firenze";
anonima = 15;
anonima = false;
console.log(typeof (anonima));
var MarioRossi = {
    id: 1,
    nome: "Mario Rossi",
    citta: "Palermo",
    maggiorenne: true
};
var GiuseppeVerdi = {
    maggiorenne: false,
    citta: "Parma",
    id: 2,
    nome: "Giuseppe Verdi"
};
var CarloCarlini = {
    maggiorenne: false,
    citta: "Caserta",
    id: 3,
    nome: "CarloCarlini"
};
var anagrafica = [
    MarioRossi, GiuseppeVerdi, CarloCarlini
];
console.log(typeof (anagrafica));
console.log(anagrafica);
anagrafica.push({
    citta: "Roma",
    id: 4,
    maggiorenne: true,
    nome: "Angelo Datini"
});
console.log(anagrafica);
CarloCarlini.citta = "Pordenone";
console.log(anagrafica);
var FabioFabietti = MarioRossi;
FabioFabietti.nome = "Fabio Fabietti";
anagrafica.push(FabioFabietti);
console.log(anagrafica);
