console.log("Calcolatrice");

const args = process.argv.filter((value, i) => { return i >= 2 });

const aString = args[0];
const operazione = args[1];
const bString = args[2];

const a = Number(aString);
const b = Number(bString);

function errore(msg) {
	console.error(msg);
	process.exit(1);
}

if (!operazione || isNaN(a) || isNaN(b)) {
	errore("Inserisci un numero valido!");
}

let risultato = NaN;

if (operazione == "somma" || operazione == "+") {
	risultato = a + b;

} else if (operazione == "sottrai" || operazione == "-") {
	risultato = a - b;

} else if (operazione == "moltiplica" || operazione == "*") {
	risultato = a * b;

} else if (operazione == "dividi" || operazione == "/") {
	risultato = a / b;

} else {
	errore(`${operazione} non è un'operazione riconosciuta. Usa somma, sottrai, moltiplica o dividi.`);
}

console.log(`Risultato: ${risultato}`);