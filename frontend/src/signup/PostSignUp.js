import React from "react";
import GameContainer from "../shared/GameContainer";
import GoBackButton from "../shared/GoBackButton";
import PostSignUpForm from "./PostSignUpForm";
import EmailUsernameModal from "./EmailUsernameModal";

const PostSignUp = () => {
  return (
    <GameContainer>
      <h1 className="heading1">Signed Up!</h1>
      <p className="text1">
        Your private username is shown
        below. <span style={{color:"#E10000", fontWeight:"bold"}}>You will
        only see this once</span> so make sure to keep it safe and don't
        share it with anyone! You'll need this to log in.
      </p>
      <div className="form-module">
        <PostSignUpForm />
      </div>
      <div className="modal-button">
        <EmailUsernameModal />
      </div>
      <GoBackButton />
    </GameContainer>
  );
};

export default PostSignUp;
