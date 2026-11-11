var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    maggiorenne: true,
    sports: [
        {
            descrizione: "Calcio",
            anniPraticato: 5
        }
    ]
};
var GiuseppeVerdi = {
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
    nome: "Angelo Datini",
    sports: [{
            descrizione: "Pallavolo",
            anniPraticato: 7
        }],
});
console.log(anagrafica);
CarloCarlini.citta = "Pordenone";
console.log(anagrafica);
var FabioFabietti = MarioRossi;
FabioFabietti.nome = "Fabio Fabietti";
anagrafica.push(FabioFabietti);
console.log(anagrafica);
console.log("Gestione O.O.P.--------------------------");
var appartamento = /** @class */ (function () {
    function appartamento(prop, mqRicevuti, cittaRicevuta, addressRicevuto) {
        this.mq = 0;
        this.citta = "";
        this.indirizzo = "";
        this.proprietario = "";
        this.mq = mqRicevuti;
        this.citta = cittaRicevuta;
        this.indirizzo = addressRicevuto;
        this.proprietario = prop;
    }
    appartamento.prototype.dettagli = function () {
        //return "citta:" + this.citta + " - indirizzo:" + this.indirizzo + " - mq:" + this.mq
        return '"citta:"' + this.citta + ' - "indirizzo:"' + this.indirizzo + ' - "mq:"' + this.mq;
        //backtik   alt+96
        return "\"Citta:\" ".concat(this.citta, " - \"Indirizzo:\" ").concat(this.indirizzo, " - 'mq:' ").concat(this.mq, " - Proprietario: ").concat(this.proprietario, " ");
    };
    return appartamento;
}());
var portuense = new appartamento("Angelo Baldini", 120, "Roma", "Via Portuense, 55");
var ostiense = new appartamento("Renato Zero", 85, "Roma", "Via Ostiense, 152");
var immobili = [
    portuense, ostiense
];
for (var indice = 0; indice < immobili.length; indice++) {
    console.log(immobili[indice].dettagli());
}
console.log(immobili);
var villa = /** @class */ (function (_super) {
    __extends(villa, _super);
    function villa(prop, mqRicevuti, cittaRicevuta, addressRicevuto, tratt) {
        var _this = _super.call(this, prop, mqRicevuti, cittaRicevuta, addressRicevuto) || this;
        _this.trattativa = tratt;
        return _this;
    }
    villa.calcolo = function () {
        return 10 * 50;
    };
    return villa;
}(appartamento));
var eur = new villa("Fabio Angiolini", 220, "Roma", "Viale Europa, 24", "Privata");
console.log(eur.dettagli());
console.log(villa.calcolo());
