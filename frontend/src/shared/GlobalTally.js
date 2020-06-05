import React, { useEffect, useState } from "react";
import ScoreCounter from "../game/ScoreCounter";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import GenericPopover from "./GenericPopover";
import GlobalTallyPopover from "./GlobalTallyPopover";

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
        position: "relative",
        display: "flex",
        flexDirection: "row",
        width: "auto",
        maxWidth: "540px",
        background: "#ffebb0",
        padding: "5px 5px",
        borderRadius: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "30px",
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
        marginLeft: "2px",
        marginRight: "3px",
        verticalAlign: "middle",
        paddingTop: "2px",
        [theme.breakpoints.up("sm")]: {
          fontSize: "30px",
        },
      },
      info: {
        width: 40,
        height: 40,
        color: "#efb84a",
        verticalAlign: "middle",
      },
    })
  );

  const classes = useStyle();

  return (
    <div className={classes.wrapper}>
      <GenericPopover popover={GlobalTallyPopover()}>
        <InfoIcon className={classes.info} />
      </GenericPopover>
      <span className={classes.text}>Global Rubbish Remaining</span>
      <ScoreCounter score={tally} />
    </div>
  );
};
export default GlobalTally;
