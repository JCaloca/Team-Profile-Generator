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
