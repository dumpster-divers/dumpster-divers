import React, { useEffect, useState } from "react";
import ScoreCounter from "../game/ScoreCounter";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const GlobalTally = () => {
  const [tally, setTally] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/game/global-count");
      const json = await res.json();
      setTally(json[0].globalRemaining);
    };
    fetchData().then(null);

    setInterval(() => fetchData(), 2000);
  }, []);

  const useStyle = makeStyles((theme) =>
    createStyles({
      wrapper: {
        display: "flex",
        flexDirection: "row",
        width: "auto",
        maxWidth: "500px",
        background: "#ffebb0",
        padding: "5px 5px",
        borderRadius: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "-25px",
        fontSize: "15px",
        [theme.breakpoints.up("sm")]: {
          fontSize: "30px",
          padding: "10px 0",
        },
      },
      text: {
        color: "#4d4125",
        fontFamily: "Roboto, sans-serif",
        fontSize: "15px",
        marginLeft: "30px",
        verticalAlign: "middle",
        paddingTop: "8px",
        [theme.breakpoints.up("sm")]: {
          fontSize: "30px",
          paddingTop: "0px",
        },
      },
    })
  );

  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <span className={classes.text}>Global Rubbish Remaining</span>
      <ScoreCounter score={tally} />
    </div>
  );
};
export default GlobalTally;
