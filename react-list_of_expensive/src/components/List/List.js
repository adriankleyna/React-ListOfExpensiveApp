import React from "react";
import style from "./List.module.css";

export default function List({
  filterName,
  filterDateFrom,
  filterDateTo,
  lista,
  selectOption,
  setThingName,
}) {
  if (selectOption === "name") {
    if (filterName) {
      lista = lista.filter(
        (list) => list.name.toLowerCase() === filterName.toLowerCase()
      );
    }
  } else {
    lista = lista.filter(
      (list) =>
        new Date(list.date).getTime() >= new Date(filterDateFrom).getTime() &&
        new Date(list.date).getTime() <= new Date(filterDateTo).getTime()
    );

    setThingName("");
  }

  const elements = lista.map((listElement) => {
    return (
      <li className={style.item_list} key={listElement.id}>
        <div className={style.name_wrapper}>
          <p>{listElement.name}</p>
          <span className={style.date}>{listElement.date}</span>
        </div>
        <div>
          <p>{listElement.price}$</p>
        </div>
      </li>
    );
  });

  return (
    <div className={style.list}>
      <div className={style.expense_amount_wrapper}>
        <p>Expense</p>
        <p>Amount</p>
      </div>
      <ul>{elements}</ul>
    </div>
  );
}
