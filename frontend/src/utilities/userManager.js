import Cookies from "js-cookie";
const registerUser = async name => {
  let body = {
    name: name,
    processedTotal: 0 // TODO: Add this
  };

  const response = await fetch("api/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  return response.json();
};

const createUserCookie = (res, err) => {
  if (!err) {
    Cookies.set("name", res.name);
    Cookies.set("username", res.username);
  } else {
    console.log("error");
  }
};

const getUsername = () => {
  return Cookies.get("username");
};

const getName = () => {
  return Cookies.get("name");
};

const logoutUser = () => {
  Cookies.remove("name");
  Cookies.remove("username");
};

//Return whether someone is logged in
const isLoggedIn = () => {
  return Cookies.get("username") !== undefined;
};

const attemptLogin = async (username) => {
  let url = "/api/users/login?username=" + username;
  console.log(url)
  let response = await fetch(url);

  return response.json();
};

export {
  registerUser,
  createUserCookie,
  getName,
  getUsername,
  logoutUser,
  isLoggedIn,
  attemptLogin
};
