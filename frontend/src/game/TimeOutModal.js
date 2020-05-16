import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(97, 74, 52, 0)',

  },
  paper: {
    backgroundColor: 'rgba(220, 97, 81, 1)',
    border: '0px',
    outline: 0,
    borderRadius: '40px',
    alignItems: 'center',
    textalign: 'centered',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 6, 2, 6),
  },
}));

const TimeOutModal = ({isOpen, onClose}) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="moda{isOpen, onClose}l-content"
        className={classes.modal}
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          }
        }
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <div className="modal-stopwatch">
              <StopwatchSVG/>
            </div>
            <h2 className="modal-title">Time's Up!</h2>
            <p className="modal-clickout">click anywhere else to continue</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

var StopwatchSVG = function(){
  return(
    <svg width="87" height="101" viewBox="0 0 87 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="43.5" cy="57.5" r="43.5" fill="#DD0000"/>
      <circle cx="43.5" cy="57.5" r="34.5" fill="#FFEDED"/>
      <rect x="40" y="28" width="7" height="33" rx="3.5" fill="#E00606"/>
      <path d="M41.0266 59.7885C39.9074 58.2779 40.2246 56.1459 41.7352 55.0266V55.0266C43.2459 53.9074 45.3778 54.2246 46.4971 55.7352L55.6293 68.0604C56.7486 69.571 56.4313 71.703 54.9207 72.8223V72.8223C53.4101 73.9416 51.2781 73.6243 50.1588 72.1137L41.0266 59.7885Z" fill="#E00606"/>
      <rect x="39" y="7" width="9" height="11" fill="#DD0000"/>
      <rect x="28" width="32" height="9" rx="4.5" fill="#DD0000"/>
    </svg>


  );
}


export default TimeOutModal;
