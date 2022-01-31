import React, { useState } from "react";
import style from './FindPrice.module.scss'


function FindPrice(){

    
    const [minValue,setMinValue]= useState(0)
    const [maxValue,setMaxValue]= useState(990)
    const [minPrice, setMinPrice]= useState(0)
    const [maxPrice, setMaxPrice]= useState(990)
    function test() {
        console.log(minPrice, maxPrice);
    }
    function minPr(e) {
        const newPr = Number(e.target.value)
        console.log(newPr, maxPrice);
        if(newPr > maxPrice){
            setMaxPrice(newPr)
            setMinPrice(newPr)
            console.log('>');
        } else if(newPr < 0 ){
            setMinPrice(0)
            console.log('<0');
        } else{
            setMinPrice(e.target.value)
            console.log('work');
        }
    }
    function maxPr(e) {
        const newPr = Number(e.target.value)
        if(newPr < minPrice){
            setMinPrice(minPrice)
            console.log('>');
        } else if(newPr < 0 ){
            setMinPrice(maxPrice)
            console.log('<0');
        } else if(newPr> maxValue){
            setMaxPrice(maxValue)
        }else {
            setMaxPrice(newPr)
            console.log('work');
        }
    }
    // function maxPr(e) {
    //     setMaxPrice(e.target.value)
    // }

    return (
        <div className={style.findPrice}>
            <input type={"number"} onChange={minPr} value={minPrice} max={maxValue} min={minValue} ></input>
            <input type={"number"} onChange={maxPr} value={maxPrice} max={maxValue} min={minValue}></input>
            <button onClick={test}>Find</button>
        </div>
    )

}


export default FindPrice