import React from "react";
import style from "./InputRange.module.scss"

function InputRange (){


    return (
        <div className={style.filters}>
			<div className={style.filters__item}>
				<h3 className={style[`filters-price__title`]}>Цена</h3>
				<div className={style[`filters-price__slider`]} id="range-slider"/>
				<div className={style[`filters-price__inputs`]}>
					<label className={style[`filters-price__label`]}>
						<span className={style[`filters-price__text`]}>от</span>
						<input type="number" min="0" max="990" placeholder="0" className={style[`filters-price__input`]} id="input-0"/>
						<span className={style[`filters-price__text`]}>₽</span>
					</label>
					<label className={style[`filters-price__label`]}>
						<span className={style[`filters-price__text`]}>до</span>
						<input type="number" min="0" max="990" placeholder="990" className={style[`filters-price__input`]} id="input-1"/>
						<span className={style[`filters-price__text`]}>₽</span>
					</label>
				</div>
			</div>
		</div>
    )
}

export default InputRange;