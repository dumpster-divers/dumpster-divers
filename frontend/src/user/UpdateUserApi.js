

const updateUser = async (user) => {
  const { username, name } = user;
  if (!name) {
    alert("must enter something");
    return;
  }

  const endpoint = 'https://dumpster-divers-test.herokuapp.com/api/users/update';

  // return fetch query to update an user
  return await fetch(endpoint, {
    method: "PUT",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      username,
      name
    })
  })
  .then(res => window.location.reload());
}

export default updateUser;
