import TextEntry from "../shared/TextEntry";
import React from "react";
import Cookies from "js-cookie";
import ActionButton from "../shared/ActionButton";

const PostSignUpForm = () => {
  const copyUsername = () => {
    navigator.clipboard.writeText(Cookies.get("username"))
      .then(null, null)

  };
  return (
    <>
      <TextEntry
        value={Cookies.get("username")}
        onChange={null}
        isDisabled={true}
      />
      <div style={{marginTop: "15px"}}>
        <ActionButton buttonText={"Copy Username"} onClick={copyUsername} />
      </div>
    </>
  );
};
export default PostSignUpForm;
