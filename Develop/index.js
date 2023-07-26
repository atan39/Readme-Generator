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
    name: "about",
    message: "What is your project about?",
  },
  {
    type: "input",
    name: "motivation",
    message: "What was your motivation for this project?",
  },
  {
    type: "input",
    name: "language",
    message: "What language did you use?",
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
    name: "license",
    message: "Did you use any licenses?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the github link to the repository?",
  },
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    const readMeContent = generateMarkdown(answers);
    fs.writeFile('./readme.md', readMeContent, (err) =>
    err ? console.log(err) : console.log("Successfully created Readme.md!")
    )
}


function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Description
     ${data.about}
     ${data.motivation}
     ${data.use}

    ## Language
     ${data.language}

    ## Installation
     ${data.install}

    ## Contributiors 
     ${data.collab}

    ## License 
     ${data.license}

    ## Link
     ${data.github}
  `;
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers)

    const test = generateMarkdown(answers);
    console.log(test);
  });
}

// Function call to initialize app
init();
