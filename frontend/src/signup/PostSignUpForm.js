import TextEntry from "../shared/TextEntry";
import React from "react";
import Cookies from "js-cookie";

const PostSignUpForm = () => {
  return (
    <>
      <TextEntry
        value={Cookies.get('username')}
        onChange={null}
        isDisabled={true}
      />
    </>
);

}
export default PostSignUpForm;
