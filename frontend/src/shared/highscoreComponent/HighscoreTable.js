import React, { useEffect, useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import HighScoreEntry from "./HighScoreEntry";

const HighscoreTable = ({ scores }) => {
  //Styling
  const useStyles = makeStyles(() =>
    createStyles({
      box: {
        padding: "20px",
        backgroundColor: "#FF7676",
        display: "flex",
        flexDirection: "column",
      },
    })
  );

  const classes = useStyles();

  return (
    <div className={classes.box}>
      {typeof scores === "undefined" || scores.length <= 0 ? (
        <h1>loading</h1>
      ) : (
        scores.map((score) => (
          <HighScoreEntry
            key={score._id}
            name={score.name}
            score={score.processedTotal}
          />
        ))
      )}
    </div>
  );
};

export default HighscoreTable;
