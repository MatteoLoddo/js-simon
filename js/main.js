// Visualizzare in pagina (html) 5 numeri casuali.
// Avviare un timer di 30 secondi
// Dopo 30 secondi, nascondere i numeri.
// L’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite un prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
const myH1Element = document.getElementById(`numeri`)


// creo funzione che mi crea numero random
function genNumber (){
    const number = Math.floor(Math.random()*10)
    return number
}


// creo il ciclo per pushare ogni numero generato in un array
// array dei numeri random
const numberContainer = [];
do{
    const number = genNumber()
    numberContainer.push(number)

}while(numberContainer.length < 5)

console.log(numberContainer.length);




let secondiVisione = 30
let visione = true

// creare il tempo che le carte restano visibili
const userNumberContainer = [];

const Timer30S = setInterval(function(){
// scrivo in html il contenuto dell array numberContainer

    
    myH1Element.innerHTML = numberContainer.toString()

secondiVisione --;

    // diminuisco il valore di secondiVisione di 1 ad ogni secondo "1000"
    // controllo secondiVisione
    console.log(secondiVisione);
    if(secondiVisione <= 1){
        myH1Element.innerHTML = "";
    }
    // condizione per fermare l intervallo
    if(secondiVisione === 0){
        clearInterval(Timer30S)
        visione = false
    
    }
},1000)

const timeDelay = setTimeout(askUser,30000);

function askUser (){
    do{
        const numUtente = parseInt(prompt(`Inserisci uno dei numeri che ricordi`))
        if(!(isNaN (numUtente))){
        userNumberContainer.push(numUtente)
        console.log(userNumberContainer);
        }
        
    }while(userNumberContainer.length < 5)

    console.log(numberContainer.length);
    comparate(numberContainer, userNumberContainer)
}


const numeriGiusti = []
const numeriSbagliati = []



// creo l array per i numeri inseriti dall utente

// creo ciclo per richiedere all utente i numeri visti in precedenza uno per uno


function comparate (containerOriginale,containerNuovo){

    console.log(containerOriginale);

    for(let i=0; i < containerNuovo.length; i++){
        const numInserito = containerNuovo[i]
        if(containerOriginale.includes(numInserito)){
            numeriGiusti.push(numInserito)
        }else{
            numeriSbagliati.push(numInserito)
        };
        
    }
    if(numeriGiusti.length === containerNuovo.length){
        alert(`hai vinto`)
    }else{
        console.log("i numeri erano questi"+ numberContainer);
        console.log("hai indovinato i seguenti numeri " + numeriGiusti);
        console.log("invece hai sbagliato  i numeri" + numeriSbagliati);
    }
console.log(numeriGiusti);
console.log(numeriSbagliati);



}











