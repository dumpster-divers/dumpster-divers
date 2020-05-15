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
    backgroundColor: 'rgba(207, 40, 40, 0.9)',
    border: '0px',
    outline: 0,
    borderRadius: '40px',
    alignItems: 'center',
    textalign: 'centered',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 15, 2, 15),
  },
}));

const CantFindUserModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Activate Modal
      </button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: { backgroundColor: 'transparent'}
          }
        }
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1 className="modal-sadface">:(</h1>
            <h2 className="modal-title">Uh Oh</h2>
            <p className="modal-content">we couldn't find a user with that username</p>
            <p className="modal-content">please try again</p>
            <p className="modal-clickout">click anywhere else to continue</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


export default CantFindUserModal;