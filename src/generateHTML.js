// TODO: generate Manager Card

// TODO: generate Engineer Card

// TODO: generate Intern Card

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
      <!-- Bootstrap CSS -->
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
        crossorigin="anonymous"
      />
      <title>Team Profile</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid bg-dark text-white"">
        <div class="container">
          <h1 class="display-4">Team Members</h1>
          <p class="lead">Meet our team!</p>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center" id="employee-cards">
          <!--Section for Employee Cards to be appended-->
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
