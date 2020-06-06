import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const HighScoreEntry = ({ name, score, index }) => {
  const useStyles = makeStyles(() =>
    createStyles({
      entry: {
        width: "337px",
        height: "40px",
        fontWeight: "600",
        backgroundColor: index % 2 === 0 ? "#FFB6B6" : "#FFDDDD",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
      name: {
        fontWeight: "200",
        fontSize: "18px",
        float: "left",
        color: "#33291b",
      },
      score: {
        fontWeight: "800",
        fontSize: "18px",
        float: "right",
        color: "#33291b",
      },
    })
  );

  const classes = useStyles();

  return (
    <div className={classes.entry}>
      <div style={{ width: "100%", padding: "0 6%" }}>
        <span className={classes.name}>
          {index + 1}. {name}
        </span>
        <span className={classes.score}>{score}</span>
      </div>
    </div>
  );
};

export default HighScoreEntry;
