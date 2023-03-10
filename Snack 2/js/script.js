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
const message = document.getElementById('message');
// const evenOption = document.getElementById('even');
// const oddOption = document.getElementById('odd');
const userChoice = document.getElementById('user-choice');

// Creo una funzione che generi un numero random da 1 a 5 per il Computer 
function generatePcRandomnumber () {
    const pcNumber = Math.floor((Math.random()*5) + 1);
    return pcNumber;
};

// Creo una funzione per verificare che un numero sia pari o dispari 
function isEven (num) {
    return num % 2 === 0;
}

playBtn.addEventListener ('click', function (){

    // Prendiamo il valore dell'input fornitoci dall'utente 
    const userNumber = parseInt(userNumberElement.value);

    // ! Validation 
    if (isNaN(userNumber) || (userNumber < 1) ) {
        message.innerText = 'Non hai inserito valori validi.'
        return
    }

    // Aggiungiamo la funzione che generi il numero random del Pc 
    let pcNumber = generatePcRandomnumber();

    // Sommiamo il numero random generato dal computer e quello scelto dall'utente 
    const sum = userNumber + pcNumber;

    // Prendo il value della select 
    const userChoiceValue = userChoice.value;

    // Creo le condizioni e aggiungo la fazione isEven per annunciare il vincitore 
    if ((userChoiceValue === 'pari') & isEven(sum)) {
    message.innerText = `Hai scelto ${userChoiceValue} e la somma è  ${sum} quindi hai vinto!`
    } else if ((userChoiceValue === 'dispari') & !isEven(sum)) {
        message.innerText = `Hai scelto ${userChoiceValue} e la somma è  ${sum} quindi hai vinto!`
    }else {
    message.innerText = `Hai scelto ${userChoiceValue} ma la somma è ${sum} quindi hai perso.`

    }

});