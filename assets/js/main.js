//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

//creare lista di chi può accedere
const userlist = [
  'luca@gmail.com', //0
  'mario@gmail.com', //1
  'fabrizio@gmail.com', //2
  'roberto@gmail.com', //3
  'lorenzo@gmail.com' //4
]


//Chiedi all’utente la sua email
//prompt

const usermail = document.getElementById("mail");
const access = document.querySelector("div")
const button = document.querySelector("button");

button.addEventListener ('click', function(){
    let inputmail = usermail.value;
    console.log(inputmail)
    //controlla che sia nella lista di chi può accedere
    for (let i = 0; i < userlist.length; i++)

if (inputmail == userlist[i]){
    console.log("accesso consentito")
    i = userlist.length;    
    access.innerHTML = "accesso consentito"

} else {
    console.log("accesso non consentito")
    access.innerHTML = "accesso non consentito"
}
})


//stampa un messaggio appropriato
