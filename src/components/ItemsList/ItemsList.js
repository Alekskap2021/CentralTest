import { useContext } from "react";
import ItemsContext from "../../context/ItemsContext";
import usePlannerService from "../../services/usePlannerService";

import "./itemsList.css";

const ItemsList = () => {
  const { items, setItems } = useContext(ItemsContext);
  const { deleteItem } = usePlannerService(setItems);

  const renderItemsList = (arr) => {
    const list = arr.map(({ id, dateOfSend, forecastEnd }) => {
      return (
        <li key={id}>
          <p>{dateOfSend}</p>
          <p>
            {dateOfSend} - {forecastEnd}
          </p>
          <button className="fa-solid fa-trash" onClick={() => deleteItem(id)}></button>
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
