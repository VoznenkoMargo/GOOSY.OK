import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import PropTypes from "prop-types";
import style from "./FindInputRange.module.scss"

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

function FindInputRange({ setNewPrice } ) {


  return (
    <div className={style.inputRange}>
      <div className="sliderArea">
        <p className={style.nameFind}>Price</p>
        <Range
          marks={{
            0: {
              style: {
                color: "#618967",
                width: '100%',
              },
              label: "$ 0"
            },
            990: {
              style: {
                color: "#618967",
                width: '100%',
              },
              label: "$ 990"
            }
          }}
          min={0}
          max={990}
          defaultValue={[0, 990]}
          tipFormatter={value => `$ ${value}`}
          onAfterChange={(value)=>setNewPrice(value)}
          tipProps={{
            placement: "top",
            visible: true
          }}
        />
      </div>
    </div>
  );
}

FindInputRange.propTypes = {
    setNewPrice: PropTypes.func.isRequired,
};

export default FindInputRange

