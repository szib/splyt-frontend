import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TaxiIcon from "@material-ui/icons/LocalTaxiTwoTone";

import TaxiSlider from "./TaxiSlider";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 40
  }
}));

const TaxiAppBar = ({ onChange, disabled, count }) => {
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
        <TaxiSlider count={count} disabled={disabled} onChange={onChange} />
      </Toolbar>
    </AppBar>
  );
};

export default TaxiAppBar;
