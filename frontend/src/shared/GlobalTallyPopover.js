import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";

const GlobalTallyPopover = ({ children }) => {
  const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: "none",
      color: "blue",
    },
    paper: {
      /*       borderRadius: "15px" */
    },
  }));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const popover = (
    <div
      style={{
        maxWidth: "300px",
        padding: "10px",
        backgroundColor: "#afd2db",
        textAlign: "center",
      }}
    >
      <p>The total amount of rubbish in the Dumpster Divers world.</p>
      <p>With your help dumpster diving, we can drive this number to 0!</p>
    </div>
  );

  return (
    <div>
      <div
        style={{ display: "inline-block" }}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {children}
      </div>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        open={open}
        anchorEl={anchorEl}
        PaperProps={{ id: "paper-popover" }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {popover}
      </Popover>
    </div>
  );
};

export default GlobalTallyPopover;
