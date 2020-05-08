import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ActionButton = ({ color = "yellow", children, to, buttonText, onClick}) => {
  const colorToHex = {
    yellow: "#FFC045"
  };
  const useStyles = makeStyles(() =>
    createStyles({
      button: {
        color: "white",
        borderRadius: "37.5px",
        fontSize: "34px",
        width: "400px",
        height: "75px",
        backgroundColor: colorToHex[color],
        fontFamily: "Roboto",
        textTransform: "none",
        textDecoration: "none",
        "&:hover, &focusVisible": {
          backgroundColor: "#efb84a",
          textDecoration: "none"
        },
        "&:active": {
          boxShadow: "inset 10px 10px 20px #CC9D3F"
        },
        "&:visited": {
          textDecoration: "none"
        }
      },
      link: {
        textDecoration: "none"
      }
    })
  );

  const classes = useStyles();

  return (
    <>
      <Button
        variant="contained"
        color={"primary"}
        size="large"
        className={classes.button}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default ActionButton;
