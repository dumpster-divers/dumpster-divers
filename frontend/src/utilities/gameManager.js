import Cookies from "js-cookie";
import { getUsername, isLoggedIn } from "./userManager";

const createHasPlayedCookie = () => {
  Cookies.set("played", true);
};

const hasPlayed = () => {
  return Cookies.get("played");
};

const removeHasPlayed = () => {
  Cookies.set("played", false);
};

const getTrash = async () => {
  return await fetch("api/game/data")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const postSessionStats = async (points) => {
  let body = {
    count: points,
  };

  if (isLoggedIn()) {
    body["username"] = getUsername();
  }

  return await fetch("api/game/add-session-stats", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export {
  getTrash,
  postSessionStats,
  createHasPlayedCookie,
  hasPlayed,
  removeHasPlayed,
};
