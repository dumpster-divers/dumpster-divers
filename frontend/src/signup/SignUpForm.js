import React, { useState } from "react";
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

  return (
    <>
      <TextEntry value={value} onChange={onChange} placeholderText={"Your Name"}/>
      <ActionButton buttonText={"Sign Up!"} onClick={handleClick}/>
    </>
  );
};

export default SignUpForm;
