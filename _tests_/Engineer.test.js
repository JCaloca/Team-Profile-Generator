const Engineer = require("../lib/Engineer");

// Test for engineer object
describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an engineer object with GitHub user value", () => {
      const newEngineer = new Engineer(
        "Mario",
        1,
        "mario@gmail.com",
        "MarioGitHub"
      );
      expect(newEngineer.github).toEqual("MarioGitHub");
    });
  });
});

// tests getEngineer function
describe("getGitHub", () => {
  it("should get the GitHub username", () => {
    const newEngineer = new Engineer(
      "Mario",
      1,
      "mario@gmail.com",
      "MarioGitHub"
    );
    expect(newEngineer.getGitHub()).toEqual("MarioGitHub");
  });
});

// test the getRole engineer
describe("getRole", () => {
  it("should get Engineer role", () => {
    const newEngineer = new Engineer(
      "Mario",
      1,
      "mario@gmail.com",
      "MarioGitHub"
    );
    expect(newEngineer.getRole()).toEqual("Engineer");
  });
});
