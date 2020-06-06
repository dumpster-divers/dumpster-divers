const addEmailApi = (user) => {
  const { username, email } = user;

  if (!email) {
    alert("you must enter something");
    return;
  }

  return fetch('/api/users/update', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      email
    })
  })
};


export default addEmailApi;
