const { it } = require("node:test");
const { describe } = require("yargs");
// Importing Employee.js
const Employee = require("../lib/Employee");

// Testing employee
describe("Employee", () => {
  it("should create an object with a name, id and email if provided valid arguments", () => {
    const newEmp = new Employee("Mario", 1, "mario@gmail.com");
    expect(newEmp.name).toEqual("Mario");
    expect(newEmp.id).toEqual("1");
    expect(newEmp.email).toEqual("mario@gmail.com");
  });
});

// Testing getName function
describe("getName", () => {
  it("should get name of employee", () => {
    const newEmp = new Employee("Mario", 1, "mario@gmail.com");
    expect(newEmp.getName()).toEqual("Bob");
  });
});

// Testing getID function
describe("getID", () => {
  it("should get the id number of employee", () => {
    const newEmp = new Employee("Mario", 1, "mario@gmail.com");
    expect(newEmp.getID()).toEqual(1);
  });
});

// Testing getEmail function
describe("getEmail", () => {
  it("should get email of employee", () => {
    const newEmp = new Employee("Mario", 1, "mario@gmail.com");
    expect(newEmp.getEmail()).toEqual("mario@gmail.com");
  });
});

// Testing getRole function
describe("getRole", () => {
  it("should return the new employee role", () => {
    const newEmp = new Employee("Mario", 1, "mario@gmail.com");
    expect(newEmp.getRole()).toEqual("Employee");
  });
});
