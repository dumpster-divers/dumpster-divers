import React, { useEffect, useState } from "react";
import HighscoreButton from "./HighscoreButton";
import HighscoreTable from "./HighscoreTable";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

//Wraps around the highscore component
const HighscoreModule = () => {
  //We store the scores in the module function to avoid calling the API repeatedly
  const [scores, setScores] = useState([]);

  useEffect(() => {
    updateScores();
  }, []);

  const updateScores = async () => {
    const results = await fetch("/api/stats/leaderboard");
    const json = await results.json();
    setScores(json);
  };

  const [open, setOpen] = useState(true);
  const useStyles = makeStyles(() =>
    createStyles({
      module: {
        zIndex: "155555",
        position: "absolute",
        // We choose this top because it's (100% - (GameContainer's min-height/2))
        top: "9.5%",
      },
    })
  );

  const classes = useStyles();
  return (
    <div className={classes.module}>
      <SlideDown
        className={[
          "my-dropdown-slidedown",
          "react-slidedown.my-dropdown-slidedown",
        ].join(" ")}
      >
        {open && <HighscoreTable scores={scores} />}
      </SlideDown>
      <HighscoreButton onClick={() => setOpen(!open)} />
    </div>
  );
};

export default HighscoreModule;
