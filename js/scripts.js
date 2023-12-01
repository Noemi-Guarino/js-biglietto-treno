// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

const distance = prompt('Inserisci il numero di kilometri che vuoi percorrere');
const age = prompt('Inserisci la tua età');
const tax = 0.21

let totalPrice = (distance * tax);
let discount = 0;

if ( age < 18 ) {
    discount = ((totalPrice *  20) / 100);   
    console.log("sconto",discount, typeof discount);
}

else if ( age >= 65 ) {
    discount = ((totalPrice *  40) / 100);
    console.log("sconto",discount, typeof discount);
}

const price = (totalPrice - discount);
console.log(price.toFixed(2))

document.getElementById("trainticket").innerHTML =
price;




