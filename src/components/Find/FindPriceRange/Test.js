import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./styles.css";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

function Test() {

  return (
    <div className="sliderArea">
    <Range
    //   marks={{
    //     100: `$ 100`,
    //     500: `$ 500`
    //   }}
      min={100}
      max={500}
      defaultValue={[200, 300]}
      tipFormatter={value => `$ ${value}`}
      onAfterChange={(value)=>console.log(value)}
      tipProps={{
        placement: "top",
        visible: true
      }}
    />
  </div>
  );
}

export default Test

