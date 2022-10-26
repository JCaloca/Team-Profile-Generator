// TODO: generate Manager Card
function generateManagerCard(manager) {
  return `
  <div class="card employee-card mx-2">
  <div class="card-header">
      <h2 class="card-title">${manager.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getID()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getOffice()}</li>
      </ul>
  </div>
</div>
  `;
}

// TODO: generate Engineer Card
function generateEngineerCard(engineer) {
  return `
  <div class="card employee-card mx-2">
  <div class="card-header">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-title"><i class="fa-solid fa-glasses mr-2"></i>${engineer.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getID()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: ${engineer.getGitHub()}</li>
      </ul>
  </div>
</div>
  `;
}
// TODO: generate Intern Card
function generateInternCard(intern) {
  return `
  <div class="card employee-card mx-2">
  <div class="card-header">
      <h2 class="card-title">${intern.getName()}</h2>
      <h3 class="card-title"><i class="fa-solid fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getID()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
  </div>
</div>
  `;
}

function renderTeam(team) {
  let teamHTML = [];
  teamHTML.push(
    team
      .filter((emp) => emp.getRole() === "Manager")
      .map((mgr) => generateManagerCard(mgr))
  );
  teamHTML.push(
    team
      .filter((emp) => emp.getRole() === "Engineer")
      .map((eng) => generateEngineerCard(eng))
      .join("")
  );
  teamHTML.push(
    team
      .filter((emp) => emp.getRole() === "Intern")
      .map((int) => generateInternCard(int))
      .join("")
  );
  return teamHTML.join("");
}

// TODO: Create function to generate html file format
function generateHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <script src="https://kit.fontawesome.com/aaedc34d30.js" crossorigin="anonymous"></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
        crossorigin="anonymous"
      />
      <title>Team Profile</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid bg-dark text-white">
        <div class="container">
          <h1 class="display-4">Team Members</h1>
          <p class="lead">Meet our team!</p>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center" id="employee-cards">
          <!--Section for Employee Cards to be appended-->
          ${renderTeam(data)}
        </div>
      </div>
  
      <script
        src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>`;
}

module.exports = generateHTML;
