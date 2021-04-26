import React, { useState } from "react";
import style from "./Search.module.css";

export default function Search({
  itemName,
  handleNameChange,
  dateFrom,
  handleDateFromChange,
  dateTo,
  handleDateToChange,
  selectOption,
  handleSelectOption,
}) {
  const selectedElement =
    selectOption === "name" ? (
      <input
        id="name"
        placeholder="Wpisz czego szukasz"
        type="text"
        value={itemName}
        onChange={handleNameChange}
      />
    ) : (
      <>
        <input type="date" value={dateFrom} onChange={handleDateFromChange} />
        <input type="date" value={dateTo} onChange={handleDateToChange} />
      </>
    );

  return (
    <div className={style.input_wrapper}>
        <hr/>
      <label htmlFor="name">
          <br/>
        Schearch settings
        <br/>
        <select onChange={handleSelectOption} value={selectOption}>
          <option value="name">Nazwa</option>
          <option value="data">Data</option>
        </select>
      </label>
      {selectedElement}
      <br/><br/>
      <hr/>
    </div>
  );
}
