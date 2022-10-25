const Employee = require("./Employee");
// extension of Employee constructor
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }

  // return office number
  getOffice() {
    return this.office;
  }
  // change role to Manager
  getRole() {
    return "Manager";
  }
}

// exporting Manager
module.exports = Manager;
