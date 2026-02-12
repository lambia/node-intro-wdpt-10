// console.log(process.argv);
// process.argv[0] --> eseguibile node
// process.argv[1] --> il nostro file
// process.argv[2] --> primo argomento
// process.argv[...] --> così via

const argomenti = process.argv.splice(2);

const nome = argomenti[0];

if (nome) {
	console.log(`Hello ${nome}!`);
} else {
	console.error("Errore: non conosco il tuo nome!")
}