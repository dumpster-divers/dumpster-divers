import React, { useEffect, useState, createRef } from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const Timer = ({ maxCount, onFinish, enabled }) => {
  // Timer logic
  const [proportion, setProportion] = useState(100);
  const [isEnabled, setIsEnabled] = useState(false);

  // Styles
  const colorProportion = (proprotion) => {
    const offset = 20;
    if (proportion <= offset) {
      return 1;
    } else {
      return Math.pow((proprotion - 100 - offset) / 100, 10);
    }
  };

  const useStylesBorder = makeStyles(() => {
    const red = parseInt(33 + colorProportion(proportion) * 222);
    const green = parseInt(150 - colorProportion(proportion) * 150);
    const blue = parseInt(83 - colorProportion(proportion) * 63);
    const backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    return createStyles({
      // Background
      root: {
        height: 15,
        borderRadius: 20,
        border: "3px solid white",
        backgroundColor: "rgba(255, 255, 255)",
        width: "50%",
        margin: "0px auto",
        marginTop: "10px",
      },
      // Progress bar
      bar: {
        borderRadius: 20,
        backgroundColor: backgroundColor,
      },
    });
  });

  const classes = useStylesBorder();

  // Make the start time accessible to the interval
  // https://github.com/facebook/react/issues/14010
  const initTimeRef = createRef();
  initTimeRef.current = Date.now() / 1000;

  useEffect(() => {
    const startTimer = () => {
      // Interval updates
      const interval = setInterval(() => {
        const count = Math.max(
          maxCount - (Date.now() / 1000 - initTimeRef.current),
          0
        );
        // Timer over
        if (count === 0) {
          onFinish();
          clearInterval(interval);
        }
        setProportion((count / maxCount) * 100);
      }, 100);
    };

    // Default state
    if (!enabled) {
      setProportion(100);
    }

    // Timer got switched on, reset and begin counting
    if (!isEnabled && enabled) {
      initTimeRef.current = Date.now() / 1000;
      startTimer();
    }
    setIsEnabled(enabled);
  }, [enabled, isEnabled, maxCount, onFinish, initTimeRef]);

  return (
    <div id="timer">
      <LinearProgress
        variant="determinate"
        color="secondary"
        value={proportion}
        classes={classes}
      />
    </div>
  );
};

export default Timer;
