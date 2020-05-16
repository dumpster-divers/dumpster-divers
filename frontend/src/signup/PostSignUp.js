import React from "react";
import GameContainer from "../shared/GameContainer";
import GoBackButton from "../shared/GoBackButton";
import PostSignUpForm from "./PostSignUpForm";

const PostSignUp = () => {
  return (
    <GameContainer>
      <h1 className="heading1">Signed Up!</h1>
      <p className="text1">
        Your private username is shown below. Keep it safe and don't share it with anyone! You'll need this to log in
      </p>
      <div className="form-module">
        <PostSignUpForm />
      </div>
      <GoBackButton />
    </GameContainer>
  );
};

export default PostSignUp;
