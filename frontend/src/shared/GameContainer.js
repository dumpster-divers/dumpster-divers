import React from "react";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const GameContainer = (props) => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      container: {
        backgroundColor: "#FFDA7A",
        borderRadius: "20px",
        position: "absolute",
        [theme.breakpoints.up("md")]: {
          width: "71%",
        },
        [theme.breakpoints.down("md")]: {
          width: "90%",
        },
        minHeight: "81%",
        maxWidth: "100%",
        margin: "0 auto",
        padding: "20px",
      },
    })
  );

  let classes = useStyles();

  return <Container className={classes.container}>{props.children}</Container>;
};

export default GameContainer;
