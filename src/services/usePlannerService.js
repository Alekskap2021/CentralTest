const usePlannerService = () => {
  const _serverUrl = "http://195.210.47.140:8000";

  const getAllItems = async () => {
    const res = await fetch(`${_serverUrl}/findAllForecastPlanerItems`);

    return await res.json();
  };

  const deleteItem = async (id) => {
    fetch(`${_serverUrl}/deleteForecastPlannerItemById?itemId=${id}`, {
      accept: "*/*",
    });
  };

  const addItem = async (dateStart, dateEnd) => {
    fetch(
      `${_serverUrl}/addNewForecastPlannerItem?dateOfSend=${dateStart}&forecastStart=${dateStart}&forecastEnd=${dateEnd}`,
      { accept: "*/*" }
    );
  };

  return { getAllItems, deleteItem, addItem };
};

export default usePlannerService;
