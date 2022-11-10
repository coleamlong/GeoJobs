import React, { useState } from "react";
import Slider from "@mui/material/Slider";

export default function RangeSlider(props) {
  const { min, max, discrete } = props;
  const [value, setValue] = useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Slider
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      marks={discrete}
      min={min}
      max={max}
    />
  );
}
