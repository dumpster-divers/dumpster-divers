import React from "react";
import diver_cert_card from "../assets/diver_cert_card.png";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { getName } from "../utilities/userManager";

const DiverCard = ({ points = 0 }) => {
  const nameText = getName() ? "Name: \n" + getName() : "";
  const pointsText = "Points: " + points;

  const useStyles = makeStyles((theme) =>
    createStyles({
      wrapper: { 
        display: "flex", 
        justifyContent: "center",
        position: "relative" 
      },
      card: {
        position: "relative"
      },
      points: {
        position: "absolute",
        fontFamily: "Roboto",
        zIndex: "9",
        color: "#333436",
        fontSize: "15px",
        marginTop: "50px",
        marginLeft: "45px",
        [theme.breakpoints.up('sm')]: {
          fontSize: "25px",
          marginTop: "85px",
          marginLeft: "70px"

        },
        textAlign: "left",
        fontWeight: "bold",
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
