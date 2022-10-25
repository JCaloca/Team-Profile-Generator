// Create class Employee constructor to export for roles
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // return name with getName()
  getName() {
    return this.name;
  }
  // return ID
  getID() {
    return this.id;
  }
  // return email
  getEmail() {
    return this.email;
  }
  // return Employee
  getRole() {
    return "Employee";
  }
}

// Export Employee
module.exports = Employee;
