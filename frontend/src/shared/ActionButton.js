import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const ActionButton = (props) => {
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
        textDecoration: "none",
        "&:hover, &$focusVisible": {
          backgroundColor: "#efb84a",
        },
        "&:active": {
          boxShadow: "inset 10px 10px 20px #CC9D3F"
        }
      },
      link: {
        textDecoration: "none",
      }
    })
  );

  const classes = useStyles();

  return (
    <Link to={props.to} className={classes.link}>
      <Button
        variant="contained"
        color={"primary"}
        size="large"
        className={classes.button}
      >
        Dive In!
      </Button>
    </Link>
  );
};

export default ActionButton;
