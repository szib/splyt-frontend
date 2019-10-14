import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import TaxiIcon from "@material-ui/icons/LocalTaxiTwoTone";
import RefreshIcon from "@material-ui/icons/Refresh";

import TaxiSlider from "./TaxiSlider";

const useStyles = makeStyles(theme => ({
  appBar: {
    top: "auto",
    bottom: 40
  }
}));

const TaxiAppBar = ({ api }) => {
  const classes = useStyles();
  const { loading, reFetch, count, setShown } = api;
  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      color="inherit"
      spacing={4}
      elevation={20}
    >
      <Toolbar>
        <TaxiIcon fontSize="large" color="primary" />
        <TaxiSlider count={count} disabled={loading} onChange={setShown} />
        <Button
          variant="contained"
          color="primary"
          onClick={reFetch}
          disabled={loading}
        >
          <RefreshIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TaxiAppBar;
