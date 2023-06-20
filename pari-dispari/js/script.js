// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



const userNumber = prompt('Scegli un numero da 1 a 5');
parseInt(userNumber);
console.log(userNumber);

const computerNumber = document.getElementById('computer-number');


function getRndInteger(){
    
    return Math.floor(Math.random() * (5 - 1 + 1) ) + 1;

};

computerNumber.innerHTML = getRndInteger(1, 5);

