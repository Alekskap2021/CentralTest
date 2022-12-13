import { useContext } from "react";
import ItemsContext from "../context/ItemsContext";

import "./itemsList.css";

const ItemsList = () => {
  const { items, setItems } = useContext(ItemsContext);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const renderItemsList = (arr) => {
    const list = arr.map(({ id, date, dateRange }) => {
      return (
        <li key={id}>
          <p>{date}</p>
          <p>
            {date} - {dateRange}
          </p>
          <button className="fa-solid fa-trash" onClick={() => removeItem(id)}></button>
        </li>
      );
    });

    return (
      <ul>
        <li>
          <p>Дата отправки</p>
          <p>Прогноз на период</p>
        </li>
        {list}
      </ul>
    );
  };

  const content = items.length ? renderItemsList(items) : <p>Элементы не добавлены</p>;
  return <>{content}</>;
};

export default ItemsList;
