import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const HighscoreTable = () => {
  const useStyles = makeStyles(() =>
    createStyles({
      box: {
        width: "400px",
        height: "200px",
        backgroundColor: "#FF7676",
      },
    })
  );

  const classes = useStyles();

  return <div className={classes.box}>wow</div>;
};

export default HighscoreTable;
