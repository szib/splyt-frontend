import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2,8)
  },
}));

const marks = [1,10,20,30,40,50].reduce((arr,v) => arr = [...arr, {value: v, label: `${v}` }], [])

const valuetext = (value) => `${value} taxis`;

const TaxiSlider = ({onChange, disabled}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography gutterBottom>
        Number of taxis
      </Typography>
      <Slider
        defaultValue={10}
        getAriaValueText={valuetext}
        aria-labelledby="taxi-slider"
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={1}
        max={50}
        onChangeCommitted={(_,value) => onChange(value)}
        disabled={disabled}
      />
    </div>
  )
}

export default TaxiSlider
