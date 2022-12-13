import AddItemForm from "../AddItemForm/AddItemForm";
import ItemsList from "../ItemsList/ItemsList";

import "./app.css";

function App() {
  return (
    <div className="App">
      <h1>Планировщик</h1>
      <AddItemForm />
      <ItemsList />
    </div>
  );
}

export default App;
