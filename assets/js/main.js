//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


//Chiedi all’utente la sua email
//prompt

const usermail = document.getElementById("mail");

const button = document.querySelector("button");

button.addEventListener ('click', function(){
    let inputmail = usermail.value;
    console.log(inputmail)

})



//controlla che sia nella lista di chi può accedere
//stampa un messaggio appropriato
