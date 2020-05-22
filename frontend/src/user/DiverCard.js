import React from "react";
import diver_cert_card from "../assets/diver_cert_card.png";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { getName, getUsername } from "../utilities/userManager";
import getUserStats from "./GetUserStatsApi";
import { useState, useEffect } from "react";

const DiverCard = () => {

  const [userStats, setUserStats] = useState([]);

  useEffect( async () => {
    await getUserStats(getUsername())
      .then(userStats => {
        setUserStats(userStats);
      });
  }, []);

  const nameText = getName() ? "Name: \n" + getName() : "";
  const currentTotal = "Total: " + userStats.processedTotal;
  const currentRecord = "Record: " + userStats.processedRecord;
  const dateJoined = "Issue Date: " + userStats.dateJoined;


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
        {currentTotal}
        <br />
        {currentRecord}
        <br />
        {dateJoined}
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
