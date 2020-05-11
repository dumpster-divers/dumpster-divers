import React, {useEffect, useState, useRef, createRef} from "react";

import {createStyles, makeStyles} from '@material-ui/core/styles';
import LinearProgress from "@material-ui/core/LinearProgress";

const Timer = ({maxCount, onFinish, enabled}) => {
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
    const [initTime, setInitTime] = useState(Date.now() / 1000);
    const [isEnabled, setIsEnabled] = useState(false);

    const ref = createRef();
    ref.current = Date.now() / 1000;
    //ref.current = initTime;
    // Timed updates


    // Countdown reset handling
    useEffect(() => {
        const startTimer = () => {
            const interval = setInterval(() => {
                //console.log(enabled);
                //console.log(initTime);
                //console.log(Date.now() / 1000);
                const count = Math.max(maxCount - (Date.now() / 1000 - ref.current), 0);
                console.log(count);
                // Timer over
                if (count === 0) {
                    onFinish();
                    //setInitTime(1000000000000000000000)
                    clearInterval(interval);
                }
                setProportion((count/maxCount)*100);
            }, 100);
            
            // Cleanup by stopping the interval timer
            return () => clearInterval(interval);
        }

        if (!enabled) {
            setProportion(100);
        }

        // Timer got switched on, it start
        if (!isEnabled && enabled) {
            ref.current = Date.now() / 1000
            startTimer();
            console.log('updating timer!')
        }
        setIsEnabled(enabled);
    }, [enabled, isEnabled, initTime, maxCount, onFinish]);

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