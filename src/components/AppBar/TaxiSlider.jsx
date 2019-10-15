import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
  slider: {
    margin: theme.spacing(6)
  }
}));

const marks = [0, 10, 20, 30, 40, 50].reduce(
  (arr, v) => (arr = [...arr, { value: v, label: `${v}` }]),
  []
);

const valuetext = value => `${value} taxis`;

const TaxiSlider = ({ count, disabled, onChange }) => {
  const classes = useStyles();
  return (
    <Slider
      className={classes.slider}
      defaultValue={count}
      getAriaValueText={valuetext}
      aria-labelledby="taxi-slider"
      valueLabelDisplay={disabled ? "off" : "on"}
      step={1}
      marks={marks}
      min={0}
      max={count}
      onChange={(_, value) => onChange(value)}
      disabled={disabled}
    />
  );
};

export default TaxiSlider;
