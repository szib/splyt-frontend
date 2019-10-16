import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import errorImg from "../assets/error.jpg";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "100vh",
    padding: theme.spacing(6),
    background: `url(${errorImg}) no-repeat center center fixed`,
    backgroundSize: "cover"
  },
  paper: {
    padding: theme.spacing(6),
    color: theme.palette.primary
  }
}));

const Error = ({ error }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h4" component="h1" color="primary">
          There has been a problem.
        </Typography>
        <Typography variant="h5" component="h2">
          Please reload the page
        </Typography>
        <Typography variant="h5" component="h2">
          {error.toString()}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Error;
