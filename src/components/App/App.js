import { useState, useEffect } from "react";
import usePlannerService from "../../services/usePlannerService";
import AddItemForm from "../AddItemForm/AddItemForm";
import ItemsList from "../ItemsList/ItemsList";
import ItemsContext from "../../context/ItemsContext";

import "./app.css";

function App() {
  const [items, setItems] = useState([]);
  const { getAllItems } = usePlannerService(setItems);

  useEffect(() => {
    getAllItems().then((res) => setItems(res));
  }, []);

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
