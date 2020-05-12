import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import TextEntry from "../shared/TextEntry";
import ActionButton from "../shared/ActionButton";

const SignUpForm = () => {
  let [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value.length > 0) {
      registerUser();
    }
  };

  const registerUser = () => {
    sendRegisterRequest().then((res, err) => {
      if (!err) {
        console.log(res.username);
      } else {
        console.log("Error getting username");
      }
    });
  };

  const sendRegisterRequest = async () => {
    let body = {
      name: value,
      processedTotal: 0 // TODO: Add this
    };

    const response = await fetch("api/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    return response.json();
  };

  const useStyles = makeStyles(() =>
    createStyles({
      wow: {
        marginTop: "15px",
      }
    }));

  const classes = useStyles();

  return (
    <>
      <TextEntry value={value} onChange={onChange} placeholderText={"Your Name"} />
      <div className={classes.wow}>
        <ActionButton buttonText={"Sign Up!"} onClick={handleClick} />
      </div>
    </>
  );
};

export default SignUpForm;
