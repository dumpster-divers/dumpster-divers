import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const TextEntry = ({value, onChange, placeholderText}) => {
  const useStyles = makeStyles(() =>
    createStyles({
      textEntry: {
        width: "400px",
        backgroundColor: "white",
        height: "50px",
        borderRadius: "50px",
        padding:"30px",
        fontFamily:"Roboto",
        fontSize:"20px",
        fontWeight:"Bold",
        borderWidth:"0px",
        placeholder: "nice"
      }
    })
  );

  let classes = useStyles();

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholderText}
        className={classes.textEntry}
      />
    </form>
  );
};

export default TextEntry;
