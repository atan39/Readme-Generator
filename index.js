// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of the project?",
  },
  {
    type: "input",
    name: "description",
    message: "How would you describe this project?",
  },
  {
    type: "input",
    name: "install",
    message: "Do you need to install anything to view or use this project?",
  },
  {
    type: "input",
    name: "use",
    message: "How does the project work?",
  },
  {
    type: "input",
    name: "collab",
    message: "Did you collaborate with anyone on this project?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the test instructions?",
  },
  {
    type: "input",
    name: "license",
    message: "Did you use any licenses?",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file

function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributions](#contributions)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Description
     ${data.use}
     
     ## Installation
     ${data.install}
     
    ## Usage
     ${data.use}
     
    ## License 
    ${data.license}
    
    ## Contributiors 
     ${data.collab}

    ## Tests
    ${data.test}
    
    ## Questions
    If you have any questions regarding this project, feel free to reach me via Github or email.

    Github: ${data.githubUsername}

    Email: ${data.email}

  `;
}

// TODO: Create a function to initialize app
function writeToFile(answers) {
    const readMeContent = generateMarkdown(answers);
    fs.writeFile("./readme.md", readMeContent, (err) =>
    err ? console.log(err) : console.log("Successfully created Readme.md!")
    );
}
function init() {
  inquirer.prompt(questions).then((answers) => {
      console.log(answers);
      
    const test = generateMarkdown(answers);
    console.log(test);
  });
}

// Function call to initialize app
init();
