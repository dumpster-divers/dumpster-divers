import React, {useEffect, useState} from "react";

import { lighten, createStyles, makeStyles} from '@material-ui/core/styles';
import LinearProgress from "@material-ui/core/LinearProgress";

const Timer = ({maxCount}) => {
    //const proportion = ((currentCount/maxCount)*100).toFixed(2);
    //console.log(proportion)
    const [proportion, setProportion] = useState(100);
    const [initTime] = useState(Date.now() / 1000);

    useEffect(() => {
    const interval = setInterval(() => {
        const count = Math.max(maxCount - (Date.now() / 1000 - initTime), 0);
        setProportion(((count/maxCount)*100).toFixed(2));
    }, 100);
    
    // Cleanup by stopping interval timer
    return () => clearInterval(interval);
    }, []); 
    //const useStyles = 
 
    //console.log(;
    return (
        <div id = "timer">
            <LinearProgress variant="determinate" value={proportion}/>
            <p></p>
        </div>
    )
}

export default Timer;