const userController = require("./userController");
jest.mock("../models/Users");

//Shared

saveFn = jest.fn();

const UserModel = {
  save: saveFn,
};

beforeAll(() => {
  const Users = require("../models/Users");
  Users.mockImplementation(() => {
    return UserModel;
  });
});

// A simple example test

const myMock = jest.fn();

describe("add user", () => {
  it(" saves user once", async () => {
    const req = {
      body: {
        name: "name",
        dateJoined: 0,
        processedTotal: 100,
        processedRecord: 100,
        username: "username",
      },
    };
    const sendFn = myMock();

    const res = {
      send: sendFn,
    };

    await userController.addUser(req, res);
    expect(saveFn.mock.calls.length).toBe(1);
  });
});
