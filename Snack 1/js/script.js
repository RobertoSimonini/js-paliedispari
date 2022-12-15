/*
    # PALIDROMA: SNACK 1.
    1.  Chiedere all’utente di inserire una parola tramiite un form
    2. Creare una funzione per capire se la parola inserita è palindroma
*/

// Prendo gli elementi dal DOM 
const userWordElement = document.getElementById('user-word');
const btnCheck = document.getElementById('btn');
const message = document.getElementById('message');






// Aggiungo l'evento al click del bottone 
btnCheck.addEventListener('click', function(){
    // Prendo il value dell'input 
    const userWord = userWordElement.value.trim();
    
    // ! Validazione 
    if (!userWord) {
        message.innerText = 'Non hai inserito valori validi.'
        return;
    }
    
    // Verifico se la parola data dall'utente è palindroma 
    const userPalindrome = isPalindrome(userWord);
    
    if (userPalindrome) {
        message.innerText = 'La parola fornita è Palindroma'
    } else {
        message.innerText = 'La parola fornita non è Palindroma'
    }   
});

// Creo una funzione che mi permetta di verificare che la paroala dell'utente sia palindroma 
function isPalindrome (word){

    // Trasformo la parola sempre in Lowercase perchè se mette un nome non riesco a confrontarli 
    word = word.toLowerCase();
    // creo un array con la parola fornita 
    const wordCarachters = word.split('');
    // Creo un ciclo for per fare il confronto
    for (let i = 0; i < wordCarachters.length; i++){
    // Creo una condizione per confrontarli 
        if (wordCarachters[i] !== wordCarachters[wordCarachters.length - 1 - i]) {
            return false;
        } else {
            return true;
        }
    }  
};
