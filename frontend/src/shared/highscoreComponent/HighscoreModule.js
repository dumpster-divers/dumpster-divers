import React, { useState } from "react";
import HighscoreButton from "./HighscoreButton";
import HighscoreTable from "./HighscoreTable";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const HighscoreModule = () => {
  const [open, setOpen] = useState(false);
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
      <SlideDown className={"my-dropdown-slidedown"}>
        {open && <HighscoreTable />}
      </SlideDown>
      <HighscoreButton onClick={() => setOpen(!open)} />
    </div>
  );
};

export default HighscoreModule;
