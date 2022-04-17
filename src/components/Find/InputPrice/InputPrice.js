import React, {useEffect, useState} from "react";
import style from "./InputPrice.module.scss";
import noUiSlider from "./nouislider.min.mjs"

function InputPrice ({setNewPrice, price}){

// const [price, setPrice]= useState([null, null])

useEffect(()=>{
	const rangeSlider = document.getElementById('range-slider');
	noUiSlider.create(rangeSlider, {
    	start: [0, 990],
			connect: true,
			step: 1,
    	range: {
			'min': [0],
			'max': [990]
    	}
	})
		const input0 = document.getElementById('input-0');
		const input1 = document.getElementById('input-1');
		const inputs = [input0, input1];
		rangeSlider.noUiSlider.on('update', function(values, handle){
			inputs[handle].value = Math.round(values[handle]);
			// console.log(price);
			const newPrice = [...price]
			newPrice[handle]=inputs[handle].value
			setNewPrice(newPrice)
		})
		const setRangeSlider = (index, value) => {
		const arr = [null, null];
		arr[index] = value;
		rangeSlider.noUiSlider.set(arr);
	};
	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider(index, e.currentTarget.value);
		});
	});
},[])

// useEffect(()=>{
// 	console.log(price);
// },[price])

    return (
        <div className={style.filters}>
			<div className={style.filters__item}>
				<h3 className={style[`filters-price__title`]}>Цена</h3>
				<div className={style[`filters-price__slider`]} id="range-slider"/>
				<div className={style[`filters-price__inputs`]}>
					<label className={style[`filters-price__label`]}>
						<span className={style[`filters-price__text`]}>от</span>
						<input type="number" min="0" max="990" placeholder="0" className={style[`filters-price__input`]} id="input-0"/>
						<span className={style[`filters-price__text`]}> $</span>
					</label>
					<label className={style[`filters-price__label`]}>
						<span className={style[`filters-price__text`]}>до</span>
						<input type="number" min="0" max="990" placeholder="990" className={style[`filters-price__input`]} id="input-1"/>
						<span className={style[`filters-price__text`]}> $</span>
					</label>
				</div>
			</div>
		</div>
    )
}

export default InputPrice;