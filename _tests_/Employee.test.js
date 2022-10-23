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

// The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.
// The first class is an Employee parent class with the following properties and methods:
// name - done
// id - done
// email - done
// getName() - done
// getId()
// getEmail()
// getRole() // Returns 'Employee'

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
