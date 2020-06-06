//render modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import ActionButton from "../shared/ActionButton";
import HowToPlayGif from "../assets/howtoplay.gif";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { hasPlayed } from "../utilities/gameManager";

// Style
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(97, 74, 52, 0)",
    width: "auto",
    height: "auto",
  },
  checkbox: {
    verticalAlign: "middle",
  },
}));

const HowToPlayModal = ({ isOpen, onClose, onChecked }) => {
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
        disableBackdropClick="true"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className="how-to-play-modal">
            {!hasPlayed() && [
              <h2 className="modal-title">How To Play</h2>,
              <img
                src={HowToPlayGif}
                alt="tutorial gif"
                className="how-to-play-gif"
              />,
            ]}

            <ActionButton onClick={onClose} buttonText={"I'm Ready!"} />
            <br />
            {!hasPlayed() && (
              <FormControlLabel
                name="doNotShowAgain"
                control={
                  <Checkbox
                    className={classes.checkbox}
                    onChange={onChecked}
                    color="primary"
                  />
                }
                label="Do not show again"
              />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default HowToPlayModal;
