import React from "react";
import diver_cert_card from "../assets/diver_cert_card.png";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { getName, getUsername } from "../utilities/userManager";
import { useState, useEffect } from "react";

const DiverCard = ({ points = 0 }) => {
  //display this while waiting for fetch call
  const loadingUserStats = {
    processedTotal: "loading...",
    processedRecord: "loading...",
  };

  const [userStats, setUserStats] = useState(loadingUserStats);
  const [userRank, setUserRank] = useState("loading...");

  //fetch data from api and update userRank and userStats state
  useEffect(() => {
    async function fetchUser() {
      const username = getUsername();
      const response = await fetch(
        `/api/stats/user-highscore?username=${username}`
      );
      const data = await response.json();
      const userStats = data.user;
      setUserStats(userStats);
      const userRank = data.userRank;
      setUserRank(userRank);
    }
    fetchUser();
  }, []);

  //construct strings that will be displayed on diver card
  const nameText = getName() ? "Name: \n" + getName() : "";
  const pointsText = "Points: " + points;
  const currentTotal = "New Total: " + userStats.processedTotal;
  const currentRecord = "Highest Record: " + userStats.processedRecord;
  const currentRank = "Global Rank: " + userRank;

  const useStyles = makeStyles((theme) =>
    createStyles({
      wrapper: {
        display: "flex",
        justifyContent: "center",
        position: "relative",
      },
      card: {
        position: "relative",
      },
      points: {
        position: "absolute",
        fontFamily: "Roboto",
        zIndex: "9",
        color: "#333436",
        fontSize: "20px",
        marginTop: "40px",
        paddingLeft: "70px",
        [theme.breakpoints.up("sm")]: {
          fontSize: "20px",
          marginTop: "65px",
        },
        textAlign: "left",
        fontWeight: "bold",
      },
    })
  );

  //render the diver card
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.points}>
        {nameText}
        <br />
        {pointsText}
        <br />
        {currentTotal}
        <br />
        {currentRecord}
        <br />
        {currentRank}
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
