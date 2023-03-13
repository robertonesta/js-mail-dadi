//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//creare lista di chi può accedere
const userlist = [
  'luca@gmail.com',
  'mario@gmail.com',
  'fabrizio@gmail.com',
  'roberto@gmail.com',
  'lorenzo@gmail.com'
]


//Chiedi all’utente la sua email
//prompt

const usermail = document.getElementById("mail");

const button = document.querySelector("button");

button.addEventListener ('click', function(){
    let inputmail = usermail.value;
    console.log(inputmail)
    //controlla che sia nella lista di chi può accedere
    for (let i = 0; i < userlist.length; i++)

if (inputmail == userlist[i]){
    console.log("accesso consentito")
} else {
    console.log("accesso non consentito")
}

})


//stampa un messaggio appropriato
