import React, {useEffect, useState} from "react";

import {createStyles, makeStyles} from '@material-ui/core/styles';
import LinearProgress from "@material-ui/core/LinearProgress";

const Timer = ({maxCount, onFinish, enabled, startTime}) => {
    // Styles
    const useStylesBorder = makeStyles(() =>
        createStyles({
            // Background bar
            root: {
                height: 15,
                borderRadius: 20,
                border: "3px solid white",
                backgroundColor: "rgba(255, 255, 255)", 
                width: "50%"
            },
            // Progress bar
            bar: {
                borderRadius: 20,
                backgroundColor: "rgb(131, 254, 129)",
            }
        })
    );

    const classes = useStylesBorder();
    
    const [proportion, setProportion] = useState(100);
    const [initTime, setInitTime] = useState(startTime);
    const [isEnabled, setIsEnabled] = useState(false);
        console.log(initTime);
    useEffect(() => {
        setInitTime(startTime);
    }, [startTime]);

    // Timed updates
    const startTimer = () => {
 /*        if (initTime === 0) {
            setInitTime(Date.now() / 1000);
        } */
        const interval = setInterval(() => {
            //console.log(initTime)
            if (initTime ===0) {
                console.log(':(')
                return;
            }

            //console.log(enabled);
            if (!enabled) clearInterval(interval);
            //console.log(initTime);
            //console.log(Date.now() / 1000);
            const count = Math.max(maxCount - (Date.now() / 1000 - initTime), 0);
            //console.log(count);
            // Timer over
            if (count === 0) {
                onFinish();
                setInitTime(0);
                clearInterval(interval);
            }
            setProportion((count/maxCount)*100);
        }, 300);
        
        // Cleanup by stopping the interval timer
        return () => clearInterval(interval);
    }

    // Countdown reset handling
    useEffect(() => {
        if (!enabled) {
            setProportion(100);
        }

        // Timer got switched on, start
        if (!isEnabled && enabled) {
            startTimer();
            //setInitTime(Date.now() / 1000);
            console.log('updating timer!')
        }
        setIsEnabled(enabled);
    }, [enabled, isEnabled]);

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