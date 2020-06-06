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

  test("sends error to endpoint when error", () => {
    mockUsers.findOneAndRemove = jest.fn().mockImplementation(() => {
      console.log("shit");
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
      message: "User sucessfully deleted",
      username: "username",
    };
    expect(res.send.mock.calls[0][0]).toEqual(expected);
  });
});
