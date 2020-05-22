import { useState, useEffect } from "react";
import { getUsername } from "../utilities/userManager";

const getUserStats = async (username) => {

  return await fetch(`/api/stats/user-highscore?username=${username}`)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    return res.user;
  });
};

export default getUserStats;
