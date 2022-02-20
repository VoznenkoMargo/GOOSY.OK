import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initCategories } from "../../../store/actionCreators/cardItemsCreator";

import style from "./CheckBox.module.scss";

function CheckBox() {
  const categories = useSelector((store) => store.items.categories);
  const dispatch = useDispatch()

  useEffect(() => {
  }, [categories]);

  const setChecked = (id)=>{
    console.log(categories);
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
            
          <input id="soup"
           type="checkbox"
           checked={setChecked('soup')}
             onChange={change}
              value="soup" />
          <p>Soup</p>
        </label>
        <label htmlFor="salads">
          <input id="salads"
           type="checkbox"
            checked={setChecked('salads')}
             onChange={change}
              value="salads" />
          <p>Salads</p>
        </label>
        <label htmlFor="main dishes">
          <input
            id="main dishes"
            type="checkbox"
            checked={setChecked('main dishes')}
            onChange={change}
            value="main dishes"
          />
          <p>Main Dishes</p>
        </label>
        <label htmlFor="desert">
          <input id="desert"
           type="checkbox"
            checked={setChecked('desert')}
             onChange={change}
              value="desert" />
          <p>Desert</p>
        </label>
        <label htmlFor="hot snaks">
          <input
            id="hot snaks"
            type="checkbox"
            checked={setChecked('hot snaks')}
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
