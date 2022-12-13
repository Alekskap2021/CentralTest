import { useState } from "react";
import AddItemForm from "../AddItemForm/AddItemForm";
import ItemsList from "../ItemsList/ItemsList";
import ItemsContext from "../context/ItemsContext";

import "./app.css";

function App() {
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <h1>Планировщик</h1>
      <ItemsContext.Provider value={{ items, setItems }}>
        <AddItemForm />
        <ItemsList />
      </ItemsContext.Provider>
    </div>
  );
}

export default App;
