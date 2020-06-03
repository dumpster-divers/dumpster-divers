import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const SmallButton = ({
  color = "yellow",
  buttonText,
  onClick,
  loading = false,
  disabled = false,
}) => {
  const colorToHex = {
    yellow: "#FFC045",
  };
  const useStyles = makeStyles((theme) =>
    createStyles({
      button: {
        color: "white",
        borderRadius: "35px",
        fontSize: "20px",
        [theme.breakpoints.up("md")]: {
          fontSize: "20px",
        },
        [theme.breakpoints.down("md")]: {
          fontSize: "20px",
        },
        minWidth: "200px",
        maxWidth: "400px",
        width: "15%",
        height: "5%",
        backgroundColor: colorToHex[color],
        fontFamily: "Roboto",
        textTransform: "none",
        textDecoration: "none",
        "&:hover, &focusVisible": {
          backgroundColor: "#efb84a",
          textDecoration: "none",
        },
        "&:active": {
          boxShadow: "inset 10px 10px 20px #CC9D3F",
        },
        "&:visited": {
          textDecoration: "none",
        },
      },
      link: {
        textDecoration: "none",
      },
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
        disabled={disabled}
      >
        {loading ? <CircularProgress /> : buttonText}
      </Button>
    </>
  );
};

export default SmallButton;
