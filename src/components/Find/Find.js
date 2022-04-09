import React from "react";
import PropTypes from "prop-types";
import style from "./Find.module.scss";
import CheckBoxContainer from "./CheckBoxContainer/CheckBoxContainer";
import FindPrice from "./FindPrice/FindPrice";
import InputRange from "./InputRange/InputRange";

function Find({  setNewPrice, price }) {
  return (
    <div className={style.find}>
      <p className={style.title}>Check filters</p>
      <CheckBoxContainer/>
      <FindPrice price={price} setNewPrice={setNewPrice} />
      <InputRange/>
      <p>Testnpm </p>
    </div>
  );
}

Find.propTypes = {
  setNewPrice:PropTypes.func.isRequired, 
  price:PropTypes.number.isRequired
}


export default Find;
