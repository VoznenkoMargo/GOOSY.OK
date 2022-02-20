import React from "react";
import PropTypes from "prop-types";
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
      <label> min Price
      <input type="number" onChange={(e) => setMinPr(e, 0)} value={price[0]} />
      </label>
      <label> max Price
      <input type="number" onChange={(e) => setMinPr(e, 1)} value={price[1]} />
      </label>
    </div>
  );
}

FindPrice.propTypes = {
  price: PropTypes.number.isRequired,
  setPri: PropTypes.func.isRequired
}

export default FindPrice;
