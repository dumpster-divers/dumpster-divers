import React, { useState } from "react";
import { getUsername } from "../utilities/userManager";
import addEmailApi from "./addEmailApi";
import SmallButton from "../shared/SmallButton";
import SmallTextEntry from "../shared/SmallTextEntry";

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
      .then((res) => window.location.reload());
  }

  return (
    <div>
      <form>
        <p style={{ fontSize: "40px", color:"#4D4125", marginLeft:"12%" }}>Enter your email below!</p>
        <div style={{ marginBottom:"3%", marginTop:"3%", marginLeft:"20%" }}>
        <SmallTextEntry
          value={inputEmail}
          onChange={(event) => {
            setInputEmail(event.target.value);
          }}
        />
        </div>
        <div style={{ marginLeft:"31%" }}>
          <SmallButton buttonText="submit" onClick={onSubmit}></SmallButton>
        </div>
      </form>
    </div>
  );
}
