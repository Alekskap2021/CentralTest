import { useState, useContext } from "react";
import ItemsContext from "../../context/ItemsContext";
import usePlannerService from "../../services/usePlannerService";

import "./addItemForm.css";

const AddItemForm = () => {
  const [date, setDate] = useState("");
  const [dateRange, setDateRange] = useState("");
  const { setItems } = useContext(ItemsContext);
  const { addItem } = usePlannerService(setItems);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    addItem(date, dateRange);

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
