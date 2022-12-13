import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import ItemsContext from "../context/ItemsContext";

import "./addItemForm.css";

const AddItemForm = () => {
  const [date, setDate] = useState("");
  const [dateRange, setDateRange] = useState("");
  const { items, setItems } = useContext(ItemsContext);

  const dateFormatter = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      date: dateFormatter(date),
      dateRange: dateFormatter(dateRange),
    };

    setItems([...items, newItem]);

    setDate("");
    setDateRange("");
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <label className="date">
        <span>С</span>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>

      <label className="dateRange">
        <span className={`${!date ? "hidden" : ""}`}>По</span>
        <input
          type="date"
          name="dateRange"
          value={dateRange}
          min={date}
          onChange={(e) => setDateRange(e.target.value)}
          disabled={!date}
          required
        />
      </label>

      <button>Добавить</button>
    </form>
  );
};

export default AddItemForm;
