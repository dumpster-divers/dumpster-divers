
const updateUser = (user) => {
  const { username, name } = user;

  if (!name) {
    alert("must enter something");
    return;
  }

  return fetch('/api/users/update', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
};


export default updateUser;
