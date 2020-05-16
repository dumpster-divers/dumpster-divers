import TextEntry from "../shared/TextEntry";
import React from "react";
import ActionButton from "../shared/ActionButton";
import { getUsername } from "../utilities/userManager";

const PostSignUpForm = () => {
  const copyUsername = () => {
    navigator.clipboard.writeText(getUsername()).then(null, null);
  };
  return (
    <>
      <TextEntry value={getUsername()} onChange={null} isDisabled={true} />
      <div style={{ marginTop: "15px" }}>
        <ActionButton buttonText={"Copy Username"} onClick={copyUsername} />
      </div>
    </>
  );
};
export default PostSignUpForm;
