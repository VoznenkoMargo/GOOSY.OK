/* eslint-disable react/jsx-no-bind */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initCategories } from "../../../store/actionCreators/cardItemsCreator";
import CheckBox from "../CheckBox/CheckBox";
import style from "./CheckBoxContainer.module.scss";

function CheckBoxContainer() {
  const categories = useSelector((store) => store.items.categories);
  const dispatch = useDispatch();

  // useEffect(() => {}, [categories]);

  const setChecked = (id) => {
    if (categories.includes(id)) {
      return true;
    }
    return false;
  };

  function change(e) {
    const { value } = e.target;
    dispatch(initCategories(value));
  }

  return (
    <div className={style.checkBox_container}>
      <form className={style.checkBox_form}>
        <CheckBox
          id="cold snaks"
          name="Cold snaks"
          funcOnChange={change}
          funChecked={setChecked}
        />
        <CheckBox
          id="soup"
          name="Soup"
          funcOnChange={change}
          funChecked={setChecked}
        />
        <CheckBox
          id="salads"
          name="Salads"
          funcOnChange={change}
          funChecked={setChecked}
        />
        <CheckBox
          id="main dishes"
          name="Main dishes"
          funcOnChange={change}
          funChecked={setChecked}
        />
        <CheckBox
          id="desert"
          name="Deserts"
          funcOnChange={change}
          funChecked={setChecked}
        />
        <CheckBox
          id="hot snaks"
          name="Hot snaks"
          funcOnChange={change}
          funChecked={setChecked}
        />
      </form>
    </div>
  );
}

export default React.memo(CheckBoxContainer);
