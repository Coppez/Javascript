document.getElementById('bottone').addEventListener('click', () => {
    const daTradurre = document.getElementById('daTradurre').value.trim();

    if (!daTradurre) {
        alert('Inserisci del testo da tradurre.');
        return;
    }

    let email = "sluca.coppellotti@itis.pr.it"

    if (document.getElementById('p_lingue').textContent == "INGLESE ➡ ITALIANO") {
        
        fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(daTradurre)}&langpair=en|it&de=${email}&mt=1`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore nella traduzione');
                }
                return response.json();
            })
            .then(data => {
                try {
                    document.getElementById('risultato').textContent = data.responseData.translatedText;
                }
                catch(errore) {
                    alert('Errore nella traduzione.');
                }
            })
            .catch(errore => {
                console.error('Errore nella traduzione:', errore);
                document.getElementById('risultato').textContent = "Errore nella traduzione: " + errore.message;
            });
    }
    else {
        fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(daTradurre)}&langpair=it|en&de=${email}&mt=1`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore nella traduzione');
                }
                return response.json();
            })
            .then(data => {
                try {
                    document.getElementById('risultato').textContent = data.responseData.translatedText;
                }
                catch(errore) {
                    alert('Errore nella traduzione.');
                }
            })
            .catch(errore => {
                console.error('Errore nella traduzione:', errore);
                document.getElementById('risultato').textContent = "Errore nella traduzione: " + errore.message;
            });
    }
});

document.getElementById('bottone_inverti').addEventListener('click', () => {

    let email = "sluca.coppellotti@itis.pr.it"

    if (document.getElementById('p_lingue').textContent == "INGLESE ➡ ITALIANO") {
        
        if (document.getElementById('risultato').textContent) {
        
            daTradurre = document.getElementById('risultato').textContent;
            document.getElementById('daTradurre').value = document.getElementById('risultato').textContent;

            fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(daTradurre)}&langpair=it|en&de=${email}&mt=1`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore nella traduzione');
                }
                return response.json();
            })
            .then(data => {
                try {
                    document.getElementById('risultato').textContent = data.responseData.translatedText;
                }
                catch(errore) {
                    alert('Errore nella traduzione.');
                }
            })
            .catch(errore => {
                console.error('Errore nella traduzione:', errore);
                document.getElementById('risultato').textContent = "Errore nella traduzione: " + errore.message;
            });
        }
        document.getElementById('p_lingue').textContent = "ITALIANO ➡ INGLESE";
    }
    else {

        if (document.getElementById('daTradurre').value) {

            daTradurre = document.getElementById('risultato').textContent;
            document.getElementById('daTradurre').value = document.getElementById('risultato').textContent;

            fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(daTradurre)}&langpair=en|it&de=${email}&mt=1`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore nella traduzione');
                }
                return response.json();
            })
            .then(data => {
                try {
                    document.getElementById('risultato').textContent = data.responseData.translatedText;
                }
                catch(errore) {
                    alert('Errore nella traduzione.');
                }
            })
            .catch(errore => {
                console.error('Errore nella traduzione:', errore);
                document.getElementById('risultato').textContent = "Errore nella traduzione: " + errore.message;
            }); 
        }
        
        document.getElementById('p_lingue').textContent = "INGLESE ➡ ITALIANO";
    }
});

function reset(){
    document.getElementById('p_lingue').textContent == "INGLESE ➡ ITALIANO";
}

reset();

//https://api.mymemory.translated.net/get?q=