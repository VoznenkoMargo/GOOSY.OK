import React from "react";
import PropTypes from "prop-types";
import style from "./Find.module.scss";
import CheckBoxContainer from "./CheckBoxContainer/CheckBoxContainer";
import FindInputRange from "./FindInputRange/FindInputRange";

function Find({ setNewPrice }) {
  return (
    <div className={style.find}>
      <p className={style.title}>Check filters</p>
      <CheckBoxContainer />
      <FindInputRange setNewPrice={setNewPrice}  />
    </div>
  );
}

Find.propTypes = {
  setNewPrice: PropTypes.func.isRequired,
};

export default React.memo(Find);
