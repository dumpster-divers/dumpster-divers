import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import EmailUsernameForm from "./EmailUsernameForm";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";

//define modal style
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "rgba(255, 232, 172, 1)",
    alignItems: 'center',
    outline: 0,
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    width:"550px",
    height: "400px"
  },
  button: {
    marginTop: '0%',
    marginLeft: '91%',
    zIndex: '10',
  },
  form: {
    width: "550px",
    height:"400px",
  }
}));

export default function EmailUsernameModal() {
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
      <Button onClick={handleOpen}>
        Make sure you'll never lose your account by linking it to your email here!
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        hideBackdrop='true'
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <IconButton className={classes.button} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <div className={classes.form}>
              <EmailUsernameForm />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
