import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";
import { Button } from "@material-ui/core";

function Subscibe() {
    const classes = useStyles();
  return (
    <div className={classes.setionSub}>
      <img
        src="https://freepikpsd.com/media/2019/11/Avocado_PNG_25283-Transparent-Png-Images.png"
        alt="avocadp"
        style={{ height: "280px" }}
      />
      <div className={classes.subscribe}>
        <h1>Subscribe to our newsletter</h1>
        <p style={{ textAlign: "left" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <TextField label="Enter your email" fullWidth />
        <Button
          className={classes.catalogButton}
          color="secondary"
          variant="contained"
          style={{ marginTop: "25px" }}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default Subscibe;
