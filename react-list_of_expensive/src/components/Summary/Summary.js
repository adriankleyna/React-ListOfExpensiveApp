import React from "react";
import style from "./Summary.module.css";

export default function Summary({ lista }) {
  const numberOfThings = lista.length;
  let summaryCost = 0;

  lista.forEach((element) => {
    summaryCost += element.price;
  });

  return (
    <div className={style.wrapper}>
      <p
        className={style.text}
      >{`Viewing ${numberOfThings} expenses totalling $${Number(summaryCost)}`}</p>
    </div>
  );
}
