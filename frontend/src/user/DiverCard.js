import React from "react";
import diver_cert_card from "../assets/diver_cert_card.png";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { getName, getUsername } from "../utilities/userManager";
import { useState, useEffect } from "react";
import EditUser from "./UpdateUser";

const DiverCard = () => {
  //display this while waiting for fetch call
  const loadingUserStats = {"processedTotal":"loading...", "processedRecord":"loading...", "dateJoined":"loading..."}

  const [userStats, setUserStats] = useState(loadingUserStats);
  const [userRank, setUserRank] = useState("loading...");

  //fetch data from api and update userRank and userStats state
  useEffect(() => {
    async function fetchUser() {
      const username = getUsername();
      const response = await fetch(`/api/stats/user-highscore?username=${username}`);
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

  //render the diver card
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
      <div className="edit-button">
        <EditUser />
      </div>
    </div>
  );
};

export default DiverCard;
