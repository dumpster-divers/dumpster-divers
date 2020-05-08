import React, {useState} from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const TextEntry = () => {
  let [value, setValue] = useState("");

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

  let handleChange = event => {
    let newVal = event.target.value;
    setValue(newVal);
  };

  return (
    <form>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={"Your Name"}
        className={classes.textEntry}
      />
    </form>
  );
};

export default TextEntry;
