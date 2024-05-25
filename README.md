# REACT - W2D4 - EPICODE

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
