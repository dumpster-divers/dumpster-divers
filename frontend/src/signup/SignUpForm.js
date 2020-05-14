import React, { useState } from "react";
import TextEntry from "../shared/TextEntry";
import ActionButton from "../shared/ActionButton";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {registerUser} from "../utilities/userManager";

const SignUpForm = () => {
  let [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value.length > 0) {
      registerUser(value);
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
      <TextEntry value={value} onChange={onChange} placeholderText={"Your Name"} />
      <div className={classes.wow}>
        <ActionButton buttonText={"Sign Up!"} onClick={handleClick}/>
      </div>
    </>
  );
};

export default SignUpForm;
