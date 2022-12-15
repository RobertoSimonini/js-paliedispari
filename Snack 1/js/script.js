/*
    # PALIDROMA: SNACK 1.
    1.  Chiedere all’utente di inserire una parola tramiite un form
    2. Creare una funzione per capire se la parola inserita è palindroma
*/

// Prendo gli elementi dal DOM 
const userWordElement = document.getElementById('user-word');
const btnCheck = document.getElementById('btn');

// Aggiungo l'evento al click del bottone 
btnCheck.addEventListener('click', function(){
    // Prendo il value dell'input 
    const userWord = userWordElement.value.trim();

    // ! Validazione 
    if (!userWord) {
        alert('non hai inserito valori validi.')
        return;
    }

});