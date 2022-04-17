import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import style from "./Find.module.scss";
import CheckBoxContainer from "./CheckBoxContainer/CheckBoxContainer";
import FindPrice from "./FindPrice/FindPrice";
import InputPrice from "./InputPrice/InputPrice";

function Find() {

  const [price, setPrice]= useState([null, null])
  useEffect(()=>{
    	console.log(price);
    },[price])

  return (
    <div className={style.find}>
      <p className={style.title}>Check filters</p>
      <CheckBoxContainer />
      <FindPrice />
      <InputPrice setNewPrice={setPrice} price={price}/>

      <p>Testnpm </p>
    </div>
  );
}

// Find.propTypes = {
//   setNewPrice: PropTypes.func.isRequired,
//   price: PropTypes.number.isRequired,
// };

export default React.memo(Find);
