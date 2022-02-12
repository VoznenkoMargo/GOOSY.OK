/* eslint-disable react/prop-types */
import React from "react";
import style from "./FindPrice.module.scss";

function FindPrice({ price, setPri }) {
  const setMinPr = (e, index) => {
    const newPr = e.target.value;
    const statePrice = [...price];
    statePrice[index] = newPr;
    setPri(statePrice);
  };

  return (
    <div className={style.findPrice}>
      <input type="number" onChange={(e) => setMinPr(e, 0)} value={price[0]} />
      <input type="number" onChange={(e) => setMinPr(e, 1)} value={price[1]} />
    </div>
  );
}

export default FindPrice;
