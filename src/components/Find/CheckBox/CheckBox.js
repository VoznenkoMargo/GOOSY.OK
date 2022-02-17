import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initCategories } from "../../../store/actionCreators/cardItemsCreator";
import PropTypes from "prop-types";
import style from "./CheckBox.module.scss";

function CheckBox({ setCateg }) {
  const [filter, setFilter] = useState([]);
  const categories = useSelector((store) => store.items.categories);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  const setChecked = (id)=>{
    if(categories.includes(id)){
        return true
    } else {return false}
  } 

  function change(e) {
    const { value } = e.target;
  //   if(!categories.includes(e.target.id)){
  //     e.target.checked = true
  // } else {e.target.checked = false}
    dispatch(initCategories(value));
  }

  return (
    <div className={style.checkBox_container}>
      <form>
        <label htmlFor="coldSnaks">
          <input
            id="cold snaks"
            type="checkbox"
            checked={setChecked('cold snaks')}
            onChange={change}
            value="cold snaks"
          />
          <p>Cold Snaks</p>
        </label>
        <label htmlFor="soup">
            
          <input id="soup" type="checkbox" checked={setChecked('soup')}  onChange={change} value="soup" />
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
        <label htmlFor="hot snaks">
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

CheckBox.propTypes = {
  setCateg: PropTypes.func.isRequired
}

export default CheckBox;
