const Manager = require("../lib/Manager");

// Test Manager object
describe("Manager", () => {
  describe("Initialization", () => {
    it("should create a manager object with office number", () => {
      const newManager = new Manager("Mario", 1, "mario@gmail.com", 2);
      expect(newManager.office).toEqual(2);
    });
  });
});

// test getManager function
describe("getOffice", () => {
  it("should get the Managers office number", () => {
    const newManager = new Manager("Mario", 1, "mario@gmail.com", 2);
    expect(newManager.getOffice()).toEqual(2);
  });
});

// test the getRole manager
describe("getRole", () => {
  it("should get Manager role", () => {
    const newManager = new Manager("Mario", 1, "mario@gmail.com", 2);
    expect(newManager.getRole()).toEqual("Manager");
  });
});
