const Intern = require("../lib/Intern");

// Test for intern Object
describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an intern object with school value", () => {
      const newIntern = new Intern(
        "Mario",
        1,
        "mario@gmail.com",
        "MarioSchool"
      );
      expect(newIntern.school).toEqual("MarioSchool");
    });
  });
});

describe("getSchool", () => {
  it("should get the school of the intern", () => {
    const newIntern = new Intern("Mario", 1, "mario@gmail.com", "MarioSchool");
    expect(newIntern.school).toEqual("MarioSchool");
  });
});

describe("getRole", () => {
  it("should get Intern role", () => {
    const newIntern = new Intern("Mario", 1, "mario@gmail.com", "MarioSchool");
    expect(newIntern.getRole()).toEqual("Intern");
  });
});
