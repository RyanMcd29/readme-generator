// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of your project?',
    'What was your motivation behind this project?',
    'What problem did you solve',
    'Enter the GitHub username of anyone else you worked on this project with. (Leave blank if no-one else)',
    'What type of license did you use?',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

inquirer
    .prompt([
        {
            // Get project name
            type: 'input',
            message: questions[0],
            name: 'projectName',
        },
        {
            // Get user motivation
            type: 'input',
            message: questions[1],
            name: 'motivation',
        },
        {
            // Get user problems
            type: 'input',
            message: questions[2],
            name: 'problem',
        },
        {
            // Get credits
            type: 'input',
            message: questions[3],
            name: 'credits',
        },
        {
            // Get license
            type: 'input',
            message: questions[4],
            name: 'license',
        },
    ])
    .then((response)=>
        fs.appendFile('inputs.txt', JSON.stringify(response), (err) =>
            err ? console.error(err) : console.log('sent user responses to txt!')
        )
    )

// Function call to initialize app
init();
