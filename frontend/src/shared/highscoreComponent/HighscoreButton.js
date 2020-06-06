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
        "&:hover": {
          backgroundColor: "#e66a6a",
          transition: "height 0.3s",
          height: "55px",
        },
        "&:active": {
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
        Leaderboard ≡
      </Button>
    </div>
  );
};
export default HighscoreButton;
