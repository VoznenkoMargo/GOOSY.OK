import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./styles.css";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

function Test({ price, setNewPrice } ) {
    // const onAfterChange = (value) => {
    //     console.log(value)
    //   };
  return (
    <div className="sliderArea">
    <Range
      marks={{
        0: `$ 0`,
        990: `$ 990`
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
  );
}

export default Test

