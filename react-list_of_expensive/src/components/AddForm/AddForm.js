import React, { useState } from "react";
import uuid from "react-uuid";

import style from "./AddForm.module.css";

export default function AddForm({ handleAddThing }) {
  const [nameItem, setNameItem] = useState("");
  const [priceItem, setPriceItem] = useState("");
  const [date, setDate] = useState("");

  const handleChangeName = (e) => setNameItem(e.target.value);
  const handleChangePrice = (e) => setPriceItem(e.target.value);
  const handleChangeDate = (e) => setDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: nameItem,
      price: Number(priceItem),
      date: new Date(date).toISOString().substr(0, 10),
    };

    setNameItem("");
    setPriceItem("");
    setDate("");

    handleAddThing(newItem);
  };

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          Add item
          <input
            type="text"
            className={style.input}
            value={nameItem}
            onChange={handleChangeName}
          />
        </label>
        <label>
          Add price
          <input
            type="number"
            className={style.input}
            value={priceItem}
            onChange={handleChangePrice}
          />
        </label>
        <label>
          Pick date
          <input
            type="date"
            className={style.input}
            value={date}
            onChange={handleChangeDate}
          />
        </label>
        <button className={style.btn_add} type="submit">
          Add item
        </button>
      </form>
    </div>
  );
}
