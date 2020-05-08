import React, {useState} from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';

/*
  popover: the element to display when hovered over
  children: which elements when hovered over will trigger the popover
 */
const GenericPopover = ({popover, children}) => {
  const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: 'none',
    }
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

  return (
    <div>
      <div style={{display: "inline-block"}}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        >
        {children}
      </div>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {popover}
      </Popover>
    </div>
  );
}

export default GenericPopover;