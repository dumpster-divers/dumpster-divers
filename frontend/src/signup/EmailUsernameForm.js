import React, { useState } from "react";
import { getUsername } from "../utilities/userManager";
import addEmailApi from "./addEmailApi";
import SmallButton from "../shared/SmallButton";
import SmallTextEntry from "../shared/SmallTextEntry";
import { isMobile } from "../utilities/display";
import ActionButton from "../shared/ActionButton";

export default function EmailUsernameForm() {
  const [inputEmail, setInputEmail] = useState();
  const username = getUsername();

  function onSubmit() {
    // call add email function
    addEmailApi({
      username: username,
      email: inputEmail,
    })
      .then((res) => res.json())
      .then((res) => window.location.reload())
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <>
      <p
        style={{
          fontSize: isMobile() ? "20px" : "40px",
          color: "#4D4125",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
          textAlign: "center",
        }}
      >
        Enter your email below!
      </p>
      <div
        style={{
          marginBottom: "3%",
          marginTop: "3%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "center",
          alignItems: "center",
        }}
      >
        <SmallTextEntry
          value={inputEmail}
          onChange={(event) => {
            setInputEmail(event.target.value);
          }}
        />
      </div>
      <div
        style={{
          width: "200px",
          height: "200px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <ActionButton buttonText="submit" onClick={onSubmit}></ActionButton>
      </div>
    </>
  );
}
