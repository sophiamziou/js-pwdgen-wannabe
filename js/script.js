// 1. permettere di inserire il nome
let nome = prompt(`Inserisci il tuo nome`);
// 2. permettere di inserire il cognome
let cognome = prompt(`Inserisci il tuo cognome`);
// 3. permettere di inserire il colore preferito
let colPref = prompt(`Inserisci il tuo colore preferito`);
// 4. aggiungere valore costante 21
const num = 21;
// 5. concatenazione delle variabili e della costante
let somma = nome + cognome + colPref + num;

// 6. visualizzo nella pagina il risultato della concatenazione
document.getElementById('pass').innerHTML =  `La tua password é ${somma}`