// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



const user = prompt('Scegli un numero da 1 a 5');
const userNumber = parseInt(user);
console.log('userNumber' ,userNumber, typeof userNumber);

if(userNumber != null) {
    document.getElementById('user-number').innerHTML = userNumber;

}

if(userNumber > 5 || userNumber < 1) {
    alert('Numero non valido');
}



const computerNumber = getRndInteger(1, 5);

let sum = computerNumber + userNumber;
console.log(sum, typeof sum);

























function getRndInteger(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) ) + 1;

}


function isEven(sum) {

    return sum % 2 == 0;
    
    
    
    
}

if(isEven(sum)) {
    document.getElementById('winner').innerHTML = 'Hai vinto';
}
else {
    document.getElementById('winner').innerHTML = 'Ha vinto il computer';
}