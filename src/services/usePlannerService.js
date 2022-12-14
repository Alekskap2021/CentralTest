const usePlannerService = (setItems) => {
  const _serverUrl = "http://195.210.47.140:8000";

  const getAllItems = async () => {
    // console.log(items);
    const res = await fetch(`${_serverUrl}/findAllForecastPlanerItems`);

    return await res.json();
  };

  const updateItems = async () => {
    getAllItems().then((res) => setItems(res));
  };

  const deleteItem = async (id) => {
    fetch(`${_serverUrl}/deleteForecastPlannerItemById?itemId=${id}`, {
      accept: "*/*",
    }).then(() => updateItems());
  };

  const addItem = async (dateStart, dateEnd) => {
    fetch(
      `${_serverUrl}/addNewForecastPlannerItem?dateOfSend=${dateStart}&forecastStart=${dateStart}&forecastEnd=${dateEnd}`,
      { accept: "*/*" }
    ).then(() => updateItems());
  };

  return { getAllItems, deleteItem, addItem };
};

export default usePlannerService;
