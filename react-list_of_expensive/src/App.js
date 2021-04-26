import "./App.css";
import { useState } from "react";
import Summary from "./components/Summary/Summary";
import AddForm from "./components/AddForm/AddForm";
import List from "./components/List/List";
import Search from "./components/Search/Search";

function App() {
  
  const dateOd = new Date().toISOString().substr(0, 10);
  let dateDo = new Date();
  dateDo.setDate(dateDo.getDate() + 31);
  dateDo = dateDo.toISOString().substr(0, 10);

  const [boughtItems, setBoughtItems] = useState([
    {
      id: 1,
      name: "Pralka",
      date: new Date().toISOString().substr(0, 10),
      price: 1200,
    },
    {
      id: 2,
      name: "Komputer",
      date: new Date().toISOString().substr(0, 10),
      price: 4000,
    },
  ]);

  const [itemName, setItemName] = useState("");
  const [dateFrom, setDateFrom] = useState(dateOd);
  const [dateTo, setDateTo] = useState(dateDo);
  const [selectOption, setSelectOption] = useState("name");

  const handleSelectOption = (e) => setSelectOption(e.target.value);
  const handleNameChange = (e) => setItemName(e.target.value);
  const handleDateFromChange = (e) => setDateFrom(e.target.value);
  const handleDateToChange = (e) => setDateTo(e.target.value);
  const handleAddThing = (newThing) =>
    setBoughtItems((prev) => [...prev, newThing]);

  return (
    <div className="App">
      <Summary lista={boughtItems} />
      <AddForm handleAddThing={handleAddThing} />
      <Search
        itemName={itemName}
        dateFrom={dateFrom}
        dateTo={dateTo}
        handleNameChange={handleNameChange}
        handleDateFromChange={handleDateFromChange}
        handleDateToChange={handleDateToChange}
        selectOption={selectOption}
        handleSelectOption={handleSelectOption}
      />
      <List
        filterName={itemName}
        filterDateFrom={dateFrom}
        filterDateTo={dateTo}
        lista={boughtItems}
        selectOption={selectOption}
        handleSelectOption={handleSelectOption}
        setThingName={setItemName}
      />
    </div>
  );
}

export default App;
