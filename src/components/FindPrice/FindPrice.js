import React, { useState,useEffect } from "react";
import style from './FindPrice.module.scss'


function FindPrice(){

    const defUrl = 'http://35.180.205.240:5000/api/products/'
    const [minValue,setMinValue]= useState(0)
    const [maxValue,setMaxValue]= useState(990)
    const [minPrice, setMinPrice]= useState(0)
    const [maxPrice, setMaxPrice]= useState(990)

    const setMinPr = (e)=>{
        let newPr = Number(e.target.value)
        setMinPrice(newPr)
    }
    const setMaxPr = (e)=>{
        let newPr = Number(e.target.value)
        setMaxPrice(newPr)
    }


    return (
        <div className={style.findPrice}>
        <p>{minPrice}{maxPrice}</p>
            <input type={"number"} onInput={setMinPr}  max={maxValue} min={minValue} ></input>
            <input type={"number"} onInput={setMaxPr}  max={maxValue} min={minValue}></input>
            <button >Find</button>
        </div>
    )

}


export default FindPrice