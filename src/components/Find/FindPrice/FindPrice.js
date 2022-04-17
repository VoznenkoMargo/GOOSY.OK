/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useEffect} from "react";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./FindPrice.module.scss";


function FindPrice() {
  const location = useLocation().search
  // const setMinPrice = (e, index) => {
  //   const newPr = e.target.value;
  //   const statePrice = [...price];
  //   statePrice[index] = newPr;
  //   setNewPrice(statePrice);
  // };

const setPrice =(e)=>{
  console.log(location);
}


useEffect(()=>{

},[location])

  return (
    <div className={style.findPrice}>
      <label>
        {" "}
        min Price
        <input
          type="number"
          onChange={(e) => setPrice()}
          // value={price[0]}
        />
      </label>
      <label>
        {" "}
        max Price
        <input
          type="number"
          // onChange={(e) => setMinPrice(e, 1)}
          // value={price[1]}
        />
      </label>
    </div>
  );
}

// FindPrice.propTypes = {
//   price: PropTypes.number.isRequired,
//   setNewPrice: PropTypes.func.isRequired,
// };

export default React.memo(FindPrice);
