//render modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ActionButton from "../shared/ActionButton";
import HowToPlayGif from "../assets/howtoplay.gif";

// Style
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(97, 74, 52, 0)",
    width: "auto",
    height: "auto"
  }
}));

const HowToPlayModal = ({ isOpen, onClose }) => {
  const classes=useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="moda{isOpen, onClose}l-content"
        className={classes.modal}
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        disableBackdropClick="true"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className="how-to-play-modal">
            <h2 className="modal-title">How To Play</h2>
            <img src={HowToPlayGif} alt="tutorial gif" className="how-to-play-gif" />
            <ActionButton onClick={onClose} buttonText={"I'm Ready!"}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default HowToPlayModal;
