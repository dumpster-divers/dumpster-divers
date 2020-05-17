//render modal
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import React from "react";

import HowToPlayGif from "../assets/howtoplay.gif";

const HowToPlayModal = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="moda{isOpen, onClose}l-content"
        //className={classes.modal}
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div>
            <h2 className="modal-title">How To Play!</h2>
            <img src={HowToPlayGif} alt="tutorial gif" />
            <p className="modal-clickout">click anywhere else to continue</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default HowToPlayModal;
