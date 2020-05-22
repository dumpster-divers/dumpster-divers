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

export function useUserStats() {
  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    getUserStats(getUsername())
      .then(userStats => {
        setUserStats(userStats);
      });
  }, []);


  return {
    userStats,
  };
}

export default {getUserStats,useUserStats};
