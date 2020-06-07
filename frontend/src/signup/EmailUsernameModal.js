import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import EmailUsernameForm from "./EmailUsernameForm";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { isMobile } from "../utilities/display";

//define modal style
const useStyles = makeStyles((theme) => ({
  modal: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "block",
    backgroundColor: "rgba(255, 232, 172, 1)",
    alignItems: "center",
    outline: 0,
    borderRadius: "20px",
    boxShadow: theme.shadows[5],
    height: "400px",
    width: isMobile() ? "auto" : "600px",
    padding: "5px",
    margin: "0px",
  },
  button: {
    marginTop: "0%",
    marginLeft: "91%",
    zIndex: "10",
  },
  form: {
    width: "100%",
    height: "400px",
    display: "flex",
    flexDirection: "column",
  },
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
    <>
      <Button onClick={handleOpen}>
        Make sure you'll never lose your account by linking it to your email
        here!
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        hideBackdrop="true"
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
    </>
  );
}
