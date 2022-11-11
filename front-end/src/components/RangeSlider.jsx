import React, { useState } from "react";
import Slider from "@mui/material/Slider";

export default function RangeSlider(props) {
  const { min, max, discrete, onChange } = props;
  const [value, setValue] = useState([min, max]);

  const handleChange = (event, value) => {
    setValue(value);
    onChange(value);
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      valueLabelDisplay="on"
      marks={discrete}
      min={min}
      max={max}
    />
  );
}
