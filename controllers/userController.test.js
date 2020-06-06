const userController = require("./userController");
jest.mock("../models/Users");
jest.mock("gfycat-style-urls");

//Shared

beforeAll(() => {
  const gfy = require("gfycat-style-urls");
  gfy.generateCombination = jest.fn().mockReturnValue("gfyusername");
});

describe("add user", () => {
  test("returns correct body when successful add", async () => {
    const MockUsers = {};
    MockUsers.save = jest
      .fn()
      .mockImplementation((callback) => callback(false, {}));

    const Users = require("../models/Users");
    Users.exists = jest.fn().mockReturnValue(false);
    Users.mockImplementation(() => MockUsers);

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

  test("returns error body when unsuccessfully adds", async () => {
    const MockUsers = {};
    MockUsers.save = jest
      .fn()
      .mockImplementation((callback) => callback("error message", {}));

    const Users = require("../models/Users");
    Users.exists = jest.fn().mockReturnValue(false);
    Users.mockImplementation(() => MockUsers);

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
