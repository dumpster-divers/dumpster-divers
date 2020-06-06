import React from "react";
import diver_cert_card from "../assets/diver_cert_card.png";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { getName, getUsername } from "../utilities/userManager";
import { useState, useEffect } from "react";
import { isLoggedIn } from "../utilities/userManager";
import { Link } from "react-router-dom";
import { isMobile } from "../utilities/display";
import EditUser from "../user/UpdateUser";

const DiverCard = ({ points = 0, hasEdit = false }) => {
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
        paddingLeft: "130px",
        [theme.breakpoints.up("sm")]: {
          fontSize: "20px",
          marginTop: "65px",
        },
        textAlign: "left",
        fontWeight: "bold",
        width: isMobile() ? "250px" : "315px",
      },
      mobileCard: {
        position: "relative",
        height: "200px",
        width: "529px",
        backgroundColor: "#C8E8EF",
        borderRadius: "5%",
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: "#2167D0",
      },
    })
  );
  const classes = useStyles();
  //Mapping of text to values
  let textDict = {
    "Name: ": getName(),
    "Points: ": points,
    "New Total: ": userStats.processedTotal,
    "Highest Record: ": userStats.processedRecord,
    "Global Rank: ": userRank,
  };

  let signedInText = (
    <div className={classes.points}>
      {Object.keys(textDict).map((key) => (
        <>
          <span>{key}</span>
          <span style={{ fontWeight: "normal" }}>{textDict[key]}</span>
          <br />
        </>
      ))}
    </div>
  );

  let guestText = (
    <div className={classes.points}>
      Name:{" "}
      <span style={{ fontWeight: "normal", fontStyle: "italic" }}>Guest</span>
      <br />
      Score:{" "}
      <span style={{ fontWeight: "normal", fontStyle: "italic" }}>
        {points}
      </span>
      <br />
      <span style={{ fontWeight: "normal", fontStyle: "italic" }}>
        To save your score,
      </span>
      <br />
      <Link to={"/signup"}>make an account</Link>
    </div>
  );

  //render the diver card
  return (
    <div className={classes.wrapper}>
      {isLoggedIn() ? signedInText : guestText}
      {isMobile() ? (
        <div className={classes.mobileCard} alt="diver certification card" />
      ) : (
        <img
          src={diver_cert_card}
          className={classes.card}
          alt="diver certification card"
        />
      )}
      {hasEdit && (
        <div className="edit-button">
          <EditUser />
        </div>
      )}
    </div>
  );
};

export default DiverCard;
