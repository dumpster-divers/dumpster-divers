import React from "react";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const HighscoreButton = ({ onClick }) => {
  const useStyle = makeStyles(() =>
    createStyles({
      button: {
        borderRadius: "0px 0px 10px 10px",
        backgroundColor: "#FF7676",
        color: "white",
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        top: "0",
        height: "50px",
        width: "203px",
        textTransform: "none",
        textDecoration: "bold",
        fontSize: "20px",
        filter: "drop-shadow( 3px 3px 1px rgba(0, 0, 0, .3))",
        "&:hover": {
          backgroundColor: "#e66a6a",
        },
        "&:active": {
          boxShadow: "inset 10px 10px 20px #CC9D3F",
          backgroundColor: "#ff7676",
          filter: "none",
        },
      },
    })
  );
  const classes = useStyle();
  return (
    <div className={classes.button}>
      <Button onClick={onClick} size={"large"} className={classes.button}>
        Leaderboard
      </Button>
    </div>
  );
};
export default HighscoreButton;
