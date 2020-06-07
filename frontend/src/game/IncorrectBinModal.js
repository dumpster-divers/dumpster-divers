import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

//define modal style
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(97, 74, 52, 0)",
  },
  paper: {
    backgroundColor: "rgba(220, 148, 81, 1)",
    border: "0px",
    outline: 0,
    borderRadius: "40px",
    alignItems: "center",
    textalign: "centered",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 10, 2, 10),
  },
  button: {
    color: "#EDEDED",
    fontSize: "20px",
    marginTop: "0%",
    fontWeight: "light",
    marginLeft: "15%",
  },
}));

//render modal
const IncorrectBinModal = ({ trashInfo, isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <div className="modal-cross">
              <CrossSVG />
            </div>
            <h3 className="modal-title">Oops</h3>
            <p>{trashInfo}</p>
            <Button className={classes.button} onClick={onClose}>
              click here to continue
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

//vector graphic for modal
var CrossSVG = function () {
  return (
    <svg
      width="87"
      height="87"
      viewBox="0 0 87 87"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="86.5688"
        y="13.7366"
        width="103"
        height="19.4265"
        rx="7"
        transform="rotate(135 86.5688 13.7366)"
        fill="#EB3B3B"
      />
      <rect
        x="86.5688"
        y="13.7366"
        width="103"
        height="19.4265"
        rx="7"
        transform="rotate(135 86.5688 13.7366)"
        fill="#C55252"
      />
      <rect
        x="13.7368"
        width="103"
        height="19.4265"
        rx="7"
        transform="rotate(45 13.7368 0)"
        fill="#EB3B3B"
      />
      <rect
        x="13.7368"
        width="103"
        height="19.4265"
        rx="7"
        transform="rotate(45 13.7368 0)"
        fill="#C55252"
      />
    </svg>
  );
};

export default IncorrectBinModal;
