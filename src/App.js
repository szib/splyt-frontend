import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import TaxiMap from "./components/Map/TaxiMap";

import "./App.css";

const useStyles = makeStyles(theme => ({
  header: {
    margin: theme.spacing(6, 0, 3),
    textAlign: "center"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h2" className={classes.header}>
        Splyt Taxi Map
      </Typography>
      <TaxiMap />
    </div>
  );
}

export default App;
