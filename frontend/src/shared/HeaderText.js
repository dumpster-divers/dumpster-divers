import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const HeaderText = (props) => {
    const useStyles = makeStyles(() =>
      createStyles({
        typography: {
            fontFamily: "Roboto",
            forntStyle: "normal",
            fontWeight: "bold",
            fontSize: "64px",
            lineHeight: "75px",
            textAlign: "center",
            color: "rgba(0, 0, 0, 0.7)"
        }
      })
    );
  
    const classes = useStyles();
  
    return (
        <Typography variant="h1" className={classes.typography}>
            {props.children}
        </Typography>
    );
  };
  
  export default HeaderText;
  