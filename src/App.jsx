import { useState, useEffect } from "react";

// Definiamo il componente principale dell'app
function App() {
  // items: variabile di stato che conterrà la lista degli elementi
  // setItems: funzione che aggiorna la variabile items
  const [items, setItems] = useState([]);

  // inputValue: variabile di stato per gestire il valore di input nel form
  // setInputValue: funzione che aggiorna il valore di inputValue
  const [inputValue, setInputValue] = useState("");

  // READ (CRUD) -> useEffect per recuperare i dati dal server quando il componente viene montato
  useEffect(() => {
    // GET all'API per ottenere gli elementi
    fetch("http://localhost:5001/items")
      .then((response) => response.json()) // Convertiamo la risposta in formato JSON
      .then((data) => setItems(data)); // Aggiorniamo la variabile di stato items con i dati ricevuti
  }, []); // L'array vuoto [] significa che questo effetto viene eseguito solo una volta al montaggio del componente

  // CREATE (CRUD) -> Funzione per gestire l'aggiunta di un nuovo elemento
  const handleAddItem = () => {
    // Creiamo un nuovo oggetto elemento con il valore dell'input
    const newItem = { name: inputValue };

    // POST all'API per aggiungere il nuovo elemento
    fetch("http://localhost:5001/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specifica il tipo di contenuto come JSON
      },
      body: JSON.stringify(newItem), // Convertiamo il nuovo oggetto elemento in una stringa JSON
    })
      .then((response) => response.json()) // Convertiamo la risposta in formato JSON
      .then((data) => setItems([...items, data])); // Aggiorniamo la lista degli elementi con il nuovo elemento

    // Resettiamo il valore dell'input
    setInputValue("");
  };

  // UPDATE (CRUD) -> Funzione per gestire l'aggiornamento di un elemento
  const handleUpdateItem = (id, newName) => {
    // PUT all'API per aggiornare l'elemento con il nuovo nome
    fetch(`http://localhost:5001/items/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Specifica il tipo di contenuto come JSON
      },
      body: JSON.stringify({ name: newName }), // Convertiamo l'oggetto aggiornato in una stringa JSON
    })
      .then((response) => response.json()) // Convertiamo la risposta in formato JSON
      .then((data) =>
        setItems(items.map((item) => (item.id === id ? data : item)))
      ); // Aggiorniamo la lista degli elementi con quello aggiornato
  };

  // DELETE (CRUD) -> Funzione per gestire la cancellazione di un elemento
  const handleDeleteItem = (id) => {
    // DELETE all'API per rimuovere l'elemento con l'id specificato
    fetch(`http://localhost:5001/items/${id}`, {
      method: "DELETE",
    }).then(() => setItems(items.filter((item) => item.id !== id))); // Aggiorniamo la lista degli elementi rimuovendo quello cancellato
  };

  return (
    <div>
      <h1>Form di aggiunta</h1>
      <input
        type="text" // Tipo di input testuale
        value={inputValue} // Valore corrente dell'input
        onChange={(e) => setInputValue(e.target.value)} // Aggiorniamo il valore di inputValue quando l'utente digita
      />
      {/* Bottone per aggiungere un nuovo elemento */}
      <button onClick={handleAddItem}>Add Item</button>{" "}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}

            {/* Bottone per cancellare l'elemento */}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>

            {/* Bottone per aggiornare l'elemento */}
            <button
              onClick={() =>
                handleUpdateItem(
                  item.id,
                  prompt("Inserisci il nuovo nome:", item.name)
                )
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
