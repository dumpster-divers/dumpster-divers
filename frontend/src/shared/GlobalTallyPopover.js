import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";

const GlobalTallyPopover = ({ children }) => {
  const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: "none",
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
    <div style={{ padding: "10px", maxWidth: "300px" }}>
      <p>
        The Global Rubbish Remaining is a count of the total amount of rubbish
        in the dumpster divers world!
      </p>
      <p>Dive and with your help we can drive this number to 0!</p>
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
