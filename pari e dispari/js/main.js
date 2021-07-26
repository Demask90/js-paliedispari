// Pari e Dispari

// Generiamo un numero random per il computer, ( l' utente sceglie il proprio numero e diventa anche range del numero random computer) 
function rdnNumber(max) {
    return  Math.floor(Math.random() * max) + 1;
}

// Sommiamo i due numeri
function sommaNumeri(num1, num2) {
    let result = num1 + num2; 
    return result;

}

// dichiaro la variabile legata al button (html)
var btn_number_user = document.getElementById("btn_number_user");

btn_number_user.addEventListener('click',

    // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    function () {
        // dichiaro le variabili legate al valore inserito dall' utente.
        var type_number_user = document.getElementById('type_number').value;
        var number_user = document.getElementById('number_user').value;
        console.log(type_number_user);
        console.log(number_user);

        // dichiaro e richiamo la variabile dalla funzione rdnNumber
        var number_rdn = rdnNumber(number_user);
        console.log(number_rdn);
        // dichiaro e richiamo la variabile della funzione sommaNumer
        let result = sommaNumeri(number_user, number_rdn);
        console.log(result);
        // Dichiariamo chi ha vinto.
        if (result % 2 == 0 && type_number_user == "even") {
            return play_rdn = alert(result + " Hai Vinto! La somma totale è pari!");
        } else if ( result % 2 !== 0  && type_number_user == "shots") {
            return play_rdn = alert(result + " Hai Vinto! La somma totale è dispari!");
        } else if ( result % 2 == 0  && type_number_user == "shots") {
            return play_rdn = alert(result +" Hai Perso! La somma totale è pari!");   
        } else 
            return play_rdn = alert(result + " Hai Perso! La somma totale è dispari!");
    }
    
)

// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.