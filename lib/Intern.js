const Employee = require("./Employee");
// extension of Employee  constructor
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // return school
  getSchool() {
    return this.school;
  }
  // change role to Intern
  getRole() {
    return "Intern";
  }
}

// exporting Intern
module.exports = Intern;
