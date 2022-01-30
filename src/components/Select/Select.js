import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Select.module.scss";
<<<<<<< HEAD
import { getUrl } from "../../store/actionCreators";
import { selectSwitch } from "./selectSwitch";

function Select() {
  const [value, setValue] = useState("All");
  // const {url} = useSelector((store)=> store.items)
=======

import { getUrl } from "../../store/actionCreators";
import selectSwitch from "./selectSwitch";

function Select() {
  const [value, setValue] = useState("All");
  // const { url} = useSelector((store)=> store.items)
>>>>>>> 7ac6e2d7df90df53ea77c53d827eb2b4e58691f0
  const dispatch = useDispatch();
  function chengeSelect(event) {
    setValue(event.target.value);
    //  dispatch(getUrl('http://35.180.205.240:5000/api/products/filter?currentPrice=215'))
  }
  useEffect(() => {
    const url = selectSwitch(value);
    dispatch(getUrl(url));
  }, [value]);

  return (
    <div className={style.selectConteiner}>
      <select value={value} onChange={chengeSelect}>
        <option>All</option>
        {/* */}
        <option>Cold Snaks</option> {/*  cold snaks, coldSnaks */}
        <option>Soup</option> {/*  soup */}
        <option>Salads</option> {/*  salads */}
        <option>Desert</option>
        {/* desert */}
        <option>Hot Snaks</option>
        {/* hot snaks */}
      </select>
      <p>Выбрана опция: {value}</p>
    </div>
  );
}

export default Select;
