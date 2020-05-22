import React from "react";
import diver_cert_card from "../assets/diver_cert_card.png";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { getName, getUsername } from "../utilities/userManager";
import { useState, useEffect } from "react";

const DiverCard = () => {

  const username = getUsername();

  const loadingUserStats = {"processedTotal":"0", "processedRecord":"0", "dateJoined":"0000-00-00"}

  const [userStats, setUserStats] = useState(loadingUserStats);
  const [userRank, setUserRank] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`/api/stats/user-highscore?username=${username}`);
      const data = await response.json();
      const userStats = data.user;
      setUserStats(userStats);
      const userRank = data.userRank;
      setUserRank(userRank);
    }
    fetchUser();
  }, []);

  const nameText = getName() ? "Name: \n" + getName() : "";
  const currentTotal = "Total: " + userStats.processedTotal;
  const currentRecord = "Record: " + userStats.processedRecord;
  const currentRank = "Global Rank: " + userRank;
  const dateJoined = "Issue Date: " + userStats.dateJoined.slice(0,10);


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
        marginTop: "65px",
        fontSize: "20px",
        textAlign: "left",
        fontWeight: "bold",
        marginLeft: "80px"
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
        {currentRank}
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
