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
const output = document.querySelector("div")
const button = document.querySelector("button");


button.addEventListener ('click', function(){
    let inputmail = usermail.value;
    console.log(inputmail)
    let access = false;

    //controlla che sia nella lista di chi può accedere
    for (let i = 0; i < userlist.length; i++) {
        if (inputmail == userlist[i]) {
            access = true;
        }
    }
       
    if (access){
        console.log("accesso consentito");    
        output.innerHTML = "accesso consentito"

    } else {
        console.log("accesso non consentito")
        output.innerHTML = "accesso non consentito"
    }

});

/*Gioco dei dadi

Generare un numero random da 1 a 6,sia per il giocatore sia per il computer.


Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

let computernumber = Math.floor(Math.random() * 6) + 1;
let usernumber = Math.floor(Math.random() * 6) + 1;
const diceEl = document.getElementById("dice")
diceEl.classList = ("fs-2")
if (usernumber > computernumber) {
    console.log("hai vinto")
    diceEl.innerHTML=(`Numero tuo ${usernumber} vs Numero del computer ${computernumber} = hai vinto`)

} else if (usernumber == computernumber) {
    console.log("hai pareggiato") 
    diceEl.innerHTML="hai pareggiato"
    diceEl.innerHTML=(`Numero tuo ${usernumber} vs Numero del computer ${computernumber} = hai pareggiato`)
} else {
    console.log("hai perso")
    diceEl.innerHTML="hai perso"
    diceEl.innerHTML=(`Numero tuo ${usernumber} vs Numero del computer ${computernumber} = hai perso`);
}

console.log(`numero utente ${usernumber} numero pc ${computernumber}`)








