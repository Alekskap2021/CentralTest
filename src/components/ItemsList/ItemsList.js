import { useEffect, useState } from "react";
import usePlannerService from "../../services/usePlannerService";

import "./itemsList.css";

const ItemsList = () => {
  const [loading, setLoading] = useState(false);
  const [itemsList, setItemsList] = useState([]);
  const [watcher, setWatcher] = useState(0);
  const { getAllItems, deleteItem } = usePlannerService();

  useEffect(() => {
    setLoading(true);

    getAllItems().then((res) => {
      setItemsList(res);
      setLoading(false);
    });

    //custum watcher for detect a server changes
    const interval = setInterval(() => {
      getAllItems().then((res) => setWatcher(res.length));
    }, 500);

    return () => clearInterval(interval);
  }, [watcher]);

  const dateFormatter = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;
  };

  const renderItemsList = (arr) => {
    const list = arr.map(({ id, dateOfSend, forecastEnd }) => {
      return (
        <li key={id}>
          <p>{dateFormatter(dateOfSend)}</p>
          <p>
            {dateFormatter(dateOfSend)} - {dateFormatter(forecastEnd)}
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

  const spinner = loading ? <p>Loading</p> : null;
  const content =
    !loading && itemsList.length ? renderItemsList(itemsList) : <p>Элементы не добавлены</p>;
  return (
    <>
      {spinner}
      {content}
    </>
  );
};

export default ItemsList;
