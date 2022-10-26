// Including need packages
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");

// Including generateHTML and test files
const generateHTML = require("./src/generateHTML");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { listenerCount } = require("process");

const teamMembers = [];
// TODO: Create Questions object to prompt users with inquirer
const questions = [
  // Managers Name
  {
    type: "input",
    name: "manager",
    message: "What is the team manager's name?",
    // Validate a manager's name is entered
    validate: (managerName) => {
      if (managerName) {
        return true;
      } else {
        console.log("A manager is required!");
        return false;
      }
    },
  },
  // Managers id number
  {
    type: "input",
    name: "id",
    message: "What is the team manager's id?",
  },
  // Managers email
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email?",
  },
  // Managers office number
  {
    type: "input",
    name: "office",
    message: "What is the team manager's office number?",
  },
];

const engineerQuestions = [
  // Managers Name
  {
    type: "input",
    name: "engineer",
    message: "What is the team engineer's name?",
    // Validate a manager's name is entered
    validate: (engineerName) => {
      if (engineerName) {
        return true;
      } else {
        console.log("A engineer name is required!");
        return false;
      }
    },
  },
  // Managers id number
  {
    type: "input",
    name: "id",
    message: "What is the engineer's id?",
  },
  // engineers email
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
  },
  // engineers office number
  {
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub?",
  },
];

const internQuestions = [
  // Managers Name
  {
    type: "input",
    name: "intern",
    message: "What is the intern's name?",
    // Validate a manager's name is entered
    validate: (internName) => {
      if (internName) {
        return true;
      } else {
        console.log("An intern name is required!");
        return false;
      }
    },
  },
  // Managers id number
  {
    type: "input",
    name: "id",
    message: "What is the intern's id?",
  },
  // interns email
  {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
  },
  // interns office number
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
  },
];

// TODO: Create function to write HTML file

// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) =>
//     err ? console.log(err) : console.log("Sucessfully created HTML!")
//   );
// }

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    let engineer = new Engineer(
      answers.engineer,
      answers.id,
      answers.email,
      answers.github
    );
    teamMembers.push(engineer);
    addTeamMember();
  });
}

function addIntern() {
  inquirer.prompt(internQuestions).then((answers) => {
    let intern = new Intern(
      answers.intern,
      answers.id,
      answers.email,
      answers.school
    );
    teamMembers.push(intern);
    addTeamMember();
  });
}

// Convert to generate HTML in dist folder
function buildTeam() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  console.log("Team Member = ", teamMembers);
  fs.writeFileSync(distPath, generateHTML(teamMembers), "utf-8");
}

function addTeamMember() {
  inquirer
    .prompt({
      type: "list",
      name: "memberType",
      message: "Which type of team member would you like to add?",
      choices: ["Engineer", "Intern", "Done adding"],
    })
    .then((choice) => {
      switch (choice.memberType) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
          break;
      }
    });
}
function managerMenu() {
  inquirer.prompt(questions).then(function (userInput) {
    let manager = new Manager(
      userInput.manager,
      userInput.id,
      userInput.email,
      userInput.office
    );
    teamMembers.push(manager);
    addTeamMember();
  });
}

// Call init function
function init() {
  managerMenu();
}
init();
