import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Slider from "@material-ui/core/Slider";
import TaxiIcon from "@material-ui/icons/LocalTaxiTwoTone";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 40
  },
  slider: {
    margin: theme.spacing(6)
  }
}));

const marks = [1, 10, 20, 30, 40, 50].reduce(
  (arr, v) => (arr = [...arr, { value: v, label: `${v}` }]),
  []
);

const valuetext = value => `${value} taxis`;

const TaxiSlider = ({ onChange, disabled, count }) => {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      color="inherit"
      spacing={4}
      elevation={20}
    >
      <Toolbar>
        <TaxiIcon fontSize="large" color="secondary" />
        <Slider
          className={classes.slider}
          defaultValue={count}
          getAriaValueText={valuetext}
          aria-labelledby="taxi-slider"
          valueLabelDisplay={disabled ? "off" : "on"}
          step={1}
          marks={marks}
          min={1}
          max={50}
          onChangeCommitted={(_, value) => onChange(value)}
          disabled={disabled}
        />
      </Toolbar>
    </AppBar>
  );
};

export default TaxiSlider;
