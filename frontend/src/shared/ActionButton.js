import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ActionButton = () => {
  const useStyles = makeStyles(() =>
    createStyles({
      button: {
        color: "white",
        borderRadius: "37.5px",
        fontSize: "34px",
        width: "400px",
        height: "75px",
        backgroundColor: "#FFC045",
        fontFamily: "Roboto",
        textTransform: "none",
        "&:hover, &$focusVisible": {
          backgroundColor: "#efb84a",
        },
        "&:active": {
          boxShadow: "inset 10px 10px 20px #CC9D3F"
        }
      }
    })
  );

  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color={"primary"}
      size="large"
      className={classes.button}
    >
      Dive In!
    </Button>
  );
};

export default ActionButton;
