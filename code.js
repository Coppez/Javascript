function domanda() {
    let stringa = prompt("Inserisci stringa: ", "");
    
    for(let i = 0; i < stringa.length; i++) {
        var lettera_finale = stringa[i]
    }

    /*if (lettera_finale == "?") {
        document.getElementById("pp").innerHTML = "Non lo so....";
    }
    else if (lettera_finale== "!") {
        document.getElementById("pp").innerHTML = "Hai ragione!";
    }

    else {
        document.getElementById("pp").innerHTML = "Riformula la frase";
    } */

    switch(lettera_finale) {
        case "?":
            document.getElementById("pp").innerHTML = "Non lo so....";
            break;
        case "!":
            document.getElementById("pp").innerHTML = "Hai ragione!";
            break;
        default:
            document.getElementById("pp").innerHTML = "Riformula la frase";
    }
}

function somma() {
    var numeri = prompt("Inserisci tutti i numeri separati da uno spazio:", "");
    var somma_neg = 0, somma_pos = 0;

    var numArray = numeri.split(" ");

    for(let i = 0; i < numArray.length; i++){
        var num = Number(numArray[i]);
        if (isNaN(num)) {
            continue; 
        }
        if (num <= 0){
            somma_neg += num;
        } 
        else {
            somma_pos += num;
        }
    }
    document.getElementById("dd1").innerHTML = "Somma numeri pari: " + somma_pos;
    document.getElementById("dd2").innerHTML = "Somma numeri dispari: " + somma_neg;
}

function clear() {
    document.getElementById("pp").innerHTML = "";
    document.getElementById("dd1").innerHTML = "";
    document.getElementById("dd2").innerHTML = "";
}

document.getElementById("bottone").addEventListener("click", function(){
    domanda();
})
document.getElementById("bottone2").addEventListener("click", function(){
    somma();
})
document.getElementById("bottone_clear").addEventListener("click", function(){
    clear();
})