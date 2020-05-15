import React from "react";
import Container from "@material-ui/core/Container";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const GameContainer = props => {
  const useStyles = makeStyles(() =>
    createStyles({
      container: {
        backgroundColor: "#FFDA7A",
        borderRadius: "20px",
        position: "absolute",
        width: "71%",
        height: "81%",
        maxWidth: "100%",
        margin: "0 auto"
      }
    })
  );

  let classes = useStyles();

  return <Container className={classes.container}>{props.children}</Container>;
};

export default GameContainer;
