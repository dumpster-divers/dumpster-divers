import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const GlobalTallyPopover = () => {
  const useStyles = makeStyles((theme) => ({
    popover: {
      margin: "20px",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.popover}>
      <h1>Hey this is the popover</h1>
      <p>And this is the paragraph below!</p>
    </div>
  );
};

export default GlobalTallyPopover;
