import TextEntry from "../shared/TextEntry";
import React from "react";
import ActionButton from "../shared/ActionButton";
import { getUsername } from "../utilities/userManager";
import { isMobile } from "../utilities/display";

const PostSignUpForm = () => {
  const copyUsername = () => {
    navigator.clipboard.writeText(getUsername()).then(null, null);
  };

  const buttonText = isMobile() ? "Copy" : "Copy Username";

  return (
    <>
      <TextEntry value={getUsername()} onChange={null} isDisabled={true} />
      <div style={{ marginTop: "15px" }}>
        <ActionButton buttonText={buttonText} onClick={copyUsername} />
      </div>
    </>
  );
};
export default PostSignUpForm;
