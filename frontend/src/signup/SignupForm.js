import React, { useState } from "react";
import TextEntry from "../shared/TextEntry";
import ActionButton from "../shared/ActionButton";

const SignupForm = () => {
  let [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.target.value);
  };

  return (
    <>
      <TextEntry value={value} onChange={onChange} />
      <ActionButton buttonText={"Sign Up!"} />
    </>
  );
};

export default SignupForm;
