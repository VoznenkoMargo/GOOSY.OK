import React from "react";
import PropTypes from "prop-types";
import style from "./Find.module.scss";
import CheckBoxContainer from "./CheckBoxContainer/CheckBoxContainer";
import FindPrice from "./FindPrice/FindPrice";

function Find({  setPri, price }) {
  return (
    <div className={style.find}>
      <p className={style.title}>Check filters</p>
      <CheckBoxContainer/>
      <FindPrice price={price} setPri={setPri} />
    </div>
  );
}

Find.propTypes = {
  setPri:PropTypes.func.isRequired, 
  price:PropTypes.number.isRequired
}


export default Find;
