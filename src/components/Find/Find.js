import React from "react";
import PropTypes from "prop-types";
import style from "./Find.module.scss";
import CheckBox from "./CheckBox/CheckBox";
import FindPrice from "./FindPrice/FindPrice";

function Find({  setPri, price }) {
  return (
    <div className={style.find}>
      <p className={style.title}>Check filters</p>
      <CheckBox  />
      <FindPrice price={price} setPri={setPri} />
    </div>
  );
}

Find.propTypes = {
  setPri:PropTypes.func.isRequired, 
  price:PropTypes.number.isRequired
}


export default Find;
