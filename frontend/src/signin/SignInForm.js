import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextEntry from "../shared/TextEntry";
import ActionButton from "../shared/ActionButton";

const SignInForm = () => {
  let [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value.length > 0) {
      //TODO: Create some sort of state and log the user in
      console.log(value)
    }
  };

  const useStyles = makeStyles(() =>
    createStyles({
      wow: {
        marginTop: "15px"
      }
    })
  );

  const classes = useStyles();

  return (
    <>
      <TextEntry value={value} onChange={onChange} placeholderText={"Your Username"}/>
      <div className={classes.wow}>
        <ActionButton buttonText={"Sign In"} onClick={handleClick} />
      </div>
    </>
  );
};

export default SignInForm;
