# REACT - W2D4 - EPICODE

## Introduciamo un nuovo hook, ovvero useEffect!

Si tratta di un hook di React che ci permette, in parole povere,  di dire a React: *“Quando succede qualcosa di specifico, esegui questa azione.”*

Ci permette di dire **cosa fare** e **quando farlo**. 

## Sintassi 

La sintassi di base di useEffect è la seguente: 

    useEffect(() => {
      // Codice da eseguire
    }, [array di dipendenze]);

- Nel dettaglio, il codice che passiamo internamente ad useEffect verrà eseguito dopo il render del nostro componente. 

- L'array di dipendenze (che è opzionale!) dice a React quando eseguire nuovamente l'effetto: se una delle dipendenze cambia, l'effetto (ovvero il codice interno a useEffect) viene lanciato nuovamente. 

Quindi, capendo il funzionamento di questo hook, possiamo ottenere diversi risultati: 

### Effetto senza dipendenze - AKA - Eseguire codice ad ogni render 

    useEffect(() => {
      // Questo codice viene eseguito ogni volta che il nostro componente viene renderizzato!
    });

Una cosa del genere potrebbe servirci per loggare info ogni volta che il componente viene renderizzato, o magari, in un blog, per aggiornare un contatore di visualizzazioni in un post. 

> Di solito lo utilizzo personalmente per tracciare il numero di volte
> che si renderizza un componente, giusto per avere idea se posso o meno
> ottimizzare le performance..

Esempio semplice: 

    import { useEffect } from 'react';
    
    function Componente() {
      useEffect(() => {
        console.log('Welcome to banana blog');
      });
    
      return (
        <>
          <h1>Welcome to banana blog!</h1>
        </>
      );
    }
    
    export default Componente;



### Effetto con array di dipendenze vuoto - AKA - Eseguire solo una volta (al montaggio). 



> Intanto, chiariamo cosa intendiamo per "montaggio"?
> 
> Montaggio = quando viene visualizzato per la prima volta!



    useEffect(() => {
      // Questo codice viene eseguito solo una volta, precisamente al montaggio del nostro componente!
    }, []);

Questo è decisamente il caso perfetto per fare fetch dei dati da un'API.

Generalmente si usa proprio per questo, per eseguire setup o inizializzazioni che devono avvenire una volta sola, all'inizio. 

### Effetto con dipendenze specificate nell'array di dipendenze - AKA - Eseguo quando qualcosa all'interno dell'array di dipendenze cambia 

    useEffect(() => {
      // Questo codice viene eseguito quando `qualcosa` cambia
    }, [qualcosa]);

Quando specifichiamo un array di dipendenze in useEffect, l’effetto viene eseguito **solo quando una delle dipendenze cambia**. 

Questo ci viene utile per ottimizzare le performance e assicurarsi che l’effetto venga eseguito solo quando vogliamo noi!

L'esempio più famoso da fare in questi casi è quello del counter che sta nel titolo della pagina stessa (intendo proprio il titolo nella tab del browser) che viene aggiornato ad ogni click. 

Una cosa del genere: 

    import { useEffect, useState } from 'react';
    
    function Componente() {
      const [contatore, setContatore] = useState(0);
    
      useEffect(() => {
        document.title = `We bomber, hai cliccato ben ${contatore} volte`;
      }, [contatore]); // L'effetto viene eseguito solo quando `contatore` cambia
    
      return (
        <div>
          <p>We, hai cliccato {contatore} volte</p>
          <button onClick={() => setContatore(contatore + 1)}>Cliccami per cambiare il titolo</button>
        </div>
      );
    }
    export default Componente;

Realisticamente, viene spesso utilizzato per fare fetch di dati in base ad input dell'utente. Immaginate di avere un `<input type="text">` che permette all'utente di inserire un parametro che passeremo insieme ad un endpoint per fare una fetch. In base all'input, si effettua una ricerca e si aggiornano i risultati. 

# Live Coding Time! 

Lanciamo il seguente comando:

    npm install -g json-server

## **Crea un file chiamato `db.json` nella root del progetto:**

    {
      "items": []
    }

**In seguito, avviamo JSON Server con il seguente comando:**

    json-server db.json --port 5000

> NB: Se la porta 5000 fosse già in uso, possiamo cambiare manualmente il numero della porta, ad esempio impostandola a 5001, lanciando quindi il comando `json-server db.json --port 5001`

## Per velocizzare il processo, solo per questa sera, realizziamo tutto all'interno del componente App.jsx

### Importiamo useState e useEffect

    import { useState, useEffect } from 'react';

### Dichiariamo lo stato per gestire la lista degli elementi

    const [items, setItems] = useState([]);

### Dichiariamo lo stato per gestire il valore dell'input

    const [inputValue, setInputValue] = useState('');

### READ: Recuperiamo dati dal server quando il componente viene montato tramite useEffect

![ray-so-export-16](https://github.com/simonedimeglio/Academy_FrontEnd/assets/78272736/7f8a7f3d-fd75-4c3d-b7c3-66209429522f)

### CREATE: Aggiunta di un nuovo elemento tramite la funzione handleAddItem

![ray-so-export-17](https://github.com/simonedimeglio/simonedimeglio/assets/78272736/3e012c8e-4462-4ac1-8f6f-5c7b5b650a20)

### UPDATE: Creazione di una funzione per gestire l'aggiornamento di un elemento

![ray-so-export-19](https://github.com/simonedimeglio/simonedimeglio/assets/78272736/367cd212-bf0b-45e5-88cc-4c2728150310)

### DELETE: Cancellazione di un elemento tramite handleDeleteItem

![ray-so-export-18](https://github.com/simonedimeglio/simonedimeglio/assets/78272736/76933af6-b361-4942-aaa1-94fa55fc785a)

### TEMPLATE HTML!

![ray-so-export-20](https://github.com/simonedimeglio/simonedimeglio/assets/78272736/db0bd99a-f795-4c32-b22a-a15d8b2012ec)
