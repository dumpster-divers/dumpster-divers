import React from "react";
import diver_cert_card from "../assets/diver_cert_card.png";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { getName } from "../utilities/userManager";

const DiverCard = ({ points = 0 }) => {
  const nameText = getName() ? "Name: \n" + getName() : "";
  const pointsText = "Points: " + points;

  const useStyles = makeStyles(() =>
    createStyles({
      wrapper: { display: "flex", justifyContent: "center" },
      card: {
        position: "relative"
      },
      points: {
        width: "300px",
        position: "absolute",
        fontFamily: "Roboto",
        zIndex: "9",
        color: "#333436",
        marginTop: "75px",
        fontSize: "25px",
        textAlign: "left",
        fontWeight: "bold",
        marginLeft: "130px"
      }
    })
  );

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.points}>
        {nameText}
        <br />
        {pointsText}
      </div>
      <img
        className={classes.card}
        src={diver_cert_card}
        alt="diver certification card"
      />
    </div>
  );
};

export default DiverCard;
