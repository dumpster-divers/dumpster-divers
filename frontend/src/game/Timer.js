import React, {useEffect, useState, createRef} from "react";

import {createStyles, makeStyles} from '@material-ui/core/styles';
import LinearProgress from "@material-ui/core/LinearProgress";

const Timer = ({maxCount, onFinish, enabled}) => {
    // Styles
    const useStylesBorder = makeStyles(() =>
        createStyles({
            // Background 
            root: {
                height: 15,
                borderRadius: 20,
                border: "3px solid white",
                backgroundColor: "rgba(255, 255, 255)", 
                width: "50%",
                margin: "0px auto",
                marginTop: "10px"
            },
            // Progress bar
            bar: {
                borderRadius: 20,
                backgroundColor: "rgb(131, 254, 129)",
            }
        })
    );

    const classes = useStylesBorder();

    // Timer logic
    const [proportion, setProportion] = useState(100);
    const [isEnabled, setIsEnabled] = useState(false);

    // Make the start time accessible to the interval
    // https://github.com/facebook/react/issues/14010
    const initTimeRef = createRef();
    initTimeRef.current = Date.now() / 1000;

    useEffect(() => {
        const startTimer = () => {
            // Interval updates
            const interval = setInterval(() => {
                const count = Math.max(maxCount - (Date.now() / 1000 - initTimeRef.current), 0);
                // Timer over
                if (count === 0) {
                    onFinish();
                    clearInterval(interval);
                }
                setProportion((count/maxCount)*100);
            }, 100);
        }

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
    )
}

export default Timer;