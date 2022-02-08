/* eslint-disable react/prop-types */
import React from "react";
import style from "./Find.module.scss";
import CheckBox from "./CheckBox/CheckBox";
import FindPrice from "./FindPrice/FindPrice";

function Find({ setCateg, setPri, price }) {
  return (
    <div className={style.find}>
      <CheckBox setCateg={setCateg} />
      <FindPrice price={price} setPri={setPri} />
    </div>
  );
}

export default Find;
