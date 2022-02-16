/* eslint-disable react/prop-types */

import React, { useState } from "react";
import style from "./CheckBox.module.scss";

function CheckBox({ setCateg }) {
  const [filter, setFilter] = useState([]);
  
  function change(e) {
    const { value } = e.target;
    const newFilter = [...filter];
    if (e.target.checked) {
      newFilter.push(value);
    } else {
      const index = newFilter.findIndex((i) => i === value);
      console.log(index);
      newFilter.splice(index, 1);
    }
    setFilter(newFilter);
    setCateg(newFilter);
  }

  return (
    <div className={style.checkBox_container}>
      <form>
        <label htmlFor="coldSnaks">
          <input
            id="coldSnaks"
            type="checkbox"
            onChange={change}
            value="cold snaks"
          />
          <p>Cold Snaks</p>
        </label>
        <label htmlFor="soup">
          <input id="soup" type="checkbox" onChange={change} value="soup" />
          <p>Soup</p>
        </label>
        <label htmlFor="salads">
          <input id="salads" type="checkbox" onChange={change} value="salads" />
          <p>Salads</p>
        </label>
        <label htmlFor="main dishes">
          <input
            id="main dishes"
            type="checkbox"
            onChange={change}
            value="main dishes"
          />
          <p>Main Dishes</p>
        </label>
        <label htmlFor="desert">
          <input id="desert" type="checkbox" onChange={change} value="desert" />
          <p>Desert</p>
        </label>
        <label htmlFor="hotSnaks">
          <input
            id="hotSnaks"
            type="checkbox"
            onChange={change}
            value="hot snaks"
          />
          <p>Hot Snaks</p>
        </label>
      </form>
    </div>
  );
}
export default CheckBox;
