/*
    # Pari e Dispari
    1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.

    2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

    3. Sommiamo i due numeri
    
    4.Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/

// Prendo gli elementi dal DOM 
const select = document.getElementById('select');
const userNumberElement = document.getElementById('user-number');
const playBtn = document.getElementById('play-btn');

// Creo una funzione che generi un numero random da 1 a 5 per il Computer 
function generatePcRandomnumber () {
    const pcRandomElement = Math.floor((Math.random()*5) + 1);
    return pcRandomElement;
};

console.log(generatePcRandomnumber());