import React from "react";
import diver_cert_card from "../assets/diver_cert_card.png";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const DiverCard = ({ points = 0 }) => {
  const pointsText = "Points: " + points;

  const useStyles = makeStyles(() =>
    createStyles({
      wrapper: { display: "flex", justifyContent: "center"},
      card: {
        position: "relative"
      },
      points: {
        position: "absolute",
        fontFamily: "Roboto",
        zIndex: "9",
        color:"black",
        marginTop: "100px",
        fontSize: "30px"
      }
    })
  );

  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.points}>{pointsText}</div>
      <img
        className={classes.card}
        src={diver_cert_card}
        alt="diver certification card"
      />
    </div>
  );
};

export default DiverCard;
