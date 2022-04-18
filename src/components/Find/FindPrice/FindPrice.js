/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import PropTypes from "prop-types";
import style from "./FindPrice.module.scss";

function FindPrice({ price, setNewPrice }) {
  const setMinPrice = (e, index) => {
    const newPr = e.target.value;
    const statePrice = [...price];
    statePrice[index] = newPr;
    setNewPrice(statePrice);
  };

  return (
    <div className={style.findPrice}>
      <label>
        <div> min Price</div>
        <div>
          {" "}
          <input
            type="number"
            onChange={(e) => setMinPrice(e, 0)}
            value={price[0]}
          />
        </div>
      </label>
      <label>
        <div> max Price</div>
        <div>
          {" "}
          <input
            type="number"
            onChange={(e) => setMinPrice(e, 1)}
            value={price[1]}
          />
        </div>
      </label>
    </div>
  );
}

FindPrice.propTypes = {
  price: PropTypes.number.isRequired,
  setNewPrice: PropTypes.func.isRequired,
};

export default React.memo(FindPrice);
