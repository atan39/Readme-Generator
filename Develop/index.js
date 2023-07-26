// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?',
    },
    {
        type: 'input',
        name : 'about',
        message: 'What is your project about?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this project?',
    },
    {
        type: 'input',
        name: 'language',
        message: 'What language did you use?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Do you need to install anything to view or use this project?',
    },
    {
        type: 'input',
        name: 'use',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'collab',
        message: 'Did you collaborate with anyone on this project?',
    },
    {
        type: 'input',
        name: 'licence',
        message: 'Did you use any licences?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the github link to the repository?',
    }];

const promptUser = () => {
    inquirer.prompt([
        {


        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
