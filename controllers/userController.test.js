const userController = require("./userController");
jest.mock("../models/Users");
jest.mock("gfycat-style-urls");

const Users = require("../models/Users");
let mockUsers;
//Shared

beforeAll(() => {
  const gfy = require("gfycat-style-urls");
  gfy.generateCombination = jest.fn().mockReturnValue("gfyusername");

  mockUsers = {};
  Users.exists = jest.fn().mockReturnValue(false);
  Users.mockImplementation(() => mockUsers);
});

describe("add user", () => {
  test("returns correct body when successful add", async () => {
    mockUsers.save = jest
      .fn()
      .mockImplementation((callback) => callback(false, {}));

    const req = {
      body: {
        name: "name",
        dateJoined: 0,
        processedTotal: 100,
        processedRecord: 100,
        username: "username",
      },
    };

    const res = {};
    res.send = jest.fn();

    await userController.addUser(req, res);

    const expected = {
      name: "name",
      username: "gfyusername",
    };
    expect(res.send.mock.calls[0][0]).toEqual(expected);
  });

  test("returns error body when users model unsuccessfully adds", async () => {
    mockUsers.save = jest
      .fn()
      .mockImplementation((callback) => callback("error message", {}));

    const req = {
      body: {
        name: "name",
        dateJoined: 0,
        processedTotal: 100,
        processedRecord: 100,
        username: "username",
      },
    };

    const res = {};
    res.send = jest.fn();
    res.status = jest.fn();
    res.render = jest.fn();

    await userController.addUser(req, res);
    expect(res.send.mock.calls.length).toBe(0);
    expect(res.status.mock.calls[0][0]).toBe(500);
    expect(res.render.mock.calls[0][0]).toEqual("error");
    expect(res.render.mock.calls[0][1]).toEqual({ error: "error message" });
  });
});

describe("delete user", () => {
  test("returns error if no username is passed in", () => {
    const req = { body: {} };

    const res = {};
    res.send = jest.fn();

    userController.deleteUser(req, res);
    expect(res.send.mock.calls[0][0]).toEqual(
      "Error: Missing 'username' in body"
    );
  });

  test("sends correct response on success", () => {
    Users.findOneAndRemove = jest.fn().mockImplementation((meh, callback) => {
      callback(false, { username: "username" });
    });

    const req = {
      body: {
        username: "username",
      },
    };

    const res = {};
    res.send = jest.fn();
    userController.deleteUser(req, res);

    const expected = {
      message: "User successfully deleted",
      username: "username",
    };
    expect(res.send.mock.calls[0][0]).toEqual(expected);
  });

  test("returns error if user not found", () => {
    Users.findOneAndRemove = jest.fn().mockImplementation((meh, callback) => {
      callback(false, false);
    });

    const req = {
      body: {
        username: "username",
      },
    };

    const res = {};
    res.send = jest.fn();
    userController.deleteUser(req, res);

    const expected = "User not found";

    expect(res.send.mock.calls[0][0]).toEqual(expected);
  });
});

describe("updateUser", () => {
  it("sends updated user when updating user", () => {
    const updatedUser = {
      name: "name",
      dateJoined: 0,
      processedTotal: 100,
      processedRecord: 100,
      username: "username",
    };
    Users.findOneAndUpdate = jest
      .fn()
      .mockImplementation(({}, {}, {}, callback) => {
        callback(false, updatedUser);
      });

    const req = {
      body: updatedUser,
    };
    const res = {};
    res.send = jest.fn();

    userController.updateUser(req, res);

    expect(res.send.mock.calls[0][0]).toEqual(updatedUser);
  });
  it("sends error if missing username in body", () => {
    const updatedUser = {
      name: "name",
      dateJoined: 0,
      processedTotal: 100,
      processedRecord: 100,
    };

    const req = {
      body: updatedUser,
    };
    const res = {};
    res.send = jest.fn();
    userController.updateUser(req, res);

    expect(res.send.mock.calls[0][0]).toEqual(
      "Error: Missing 'username' in body"
    );
  });
});

describe("login user", () => {
  it("sends back the users details on successful find", async () => {
    const user = {
      username: "username",
      name: "name",
    };

    const req = {
      username: "username",
    };

    const allUsersObject = {};

    allUsersObject.find = jest.fn().mockImplementation(() => user);

    const promise = new Promise((resolve, reject) => {
      resolve(allUsersObject);
    });
    Users.find = jest.fn().mockImplementation(() => promise);

    const res = {};
    res.send = jest.fn();

    await userController.loginUser(req, res);
    console.log(res.send.mock);
    expect(res.send.mock.calls[0][0]).toEqual(user);
  });
});
