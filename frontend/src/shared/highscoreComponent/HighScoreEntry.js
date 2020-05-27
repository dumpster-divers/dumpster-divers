import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const HighScoreEntry = ({ name, score }) => {
  const useStyles = makeStyles(() =>
    createStyles({
      entry: {
        width: "337px",
        height: "40px",
        fontWeight: "600",
        backgroundColor: "#FFB6B6",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
      name: {
        fontWeight: "200",
        fontSize: "18px",
        float: "left",
      },
      score: {
        fontWeight: "800",
        fontSize: "18px",
        float: "right",
      },
    })
  );

  const classes = useStyles();

  return (
    <div className={classes.entry}>
      <div style={{ width: "100%", padding: "0 10%" }}>
        <span className={classes.name}>{name}</span>
        <span className={classes.score}>{score}</span>
      </div>
    </div>
  );
};

export default HighScoreEntry;
