const request = require("../api/request");

describe("Log in to the integration tests of the process", () => {
  const signUpName = "admin";
  let signUpUsername = "";

  const name = "Matt";
  const username = "Proud-Victorious-Cormorant";

  test(`The ${signUpName} signup `, async () => {
    const userInfo = await request({
      method: "POST",
      url: "/api/users/add",
      data: { name: signUpName },
    });

    signUpUsername = userInfo.username;

    expect(userInfo.name).toBe(signUpName);
    expect(userInfo.username).not.toBe("");
  });

  test(`The ${signUpName} delete `, async () => {
    const userInfo = await request({
      method: "DELETE",
      url: "/api/users/delete",
      data: { username: signUpUsername },
    });

    expect(userInfo.username).toBe(signUpUsername);
  });

  test(`The ${username} login `, async () => {
    const userInfo = await request({
      method: "GET",
      url: "/api/users/login",
      params: { username },
    });

    expect(userInfo.name).toBe(name);
  });
});
