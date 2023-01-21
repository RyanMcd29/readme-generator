const fileName = 'question-inputs';

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of your project?',
    'Enter your gitHub username',
    'Enter your email',
    'Enter the github usernames of other people who worked on this project with you seperated by a comma.',
    'Write installation instructions to run this project',
    'Write instructions for testiing this code',
    'What type of license would you like to use?',
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    fs.appendFile(`${fileName}.txt`, JSON.stringify(data), (err) =>
            err ? console.error(err) : console.log('sent user responses to txt!'))
}

// TODO: Create a function to initialize app
function init() {
// Clear existing log files
    

inquirer
    .prompt([
        {
            // Get project name
            type: 'input',
            message: questions[0],
            name: 'projectName',
        },
        {
            // Get user name
            type: 'input',
            message: questions[1],
            name: 'userName',
        },
        {
            // Get user email
            type: 'input',
            message: questions[3],
            name: 'email',
        },
        {
            // Get user project description
            type: 'input',
            message: questions[4],
            name: 'description',
        },
        {
            // Get credits
            type: 'input',
            message: questions[5],
            name: 'credits',
        },
        {
            // Get install instructions
            type: 'input',
            message: questions[6],
            name: 'installationaIns',
        },
        {
            // Testing Instructions
            type: 'input',
            message: questions[6],
            name: 'testingIns',
        },
        {
            // Get license
            type: 'input',
            message: questions[7],
            name: 'license',
        },
    ])
    .then((data) =>
     // Write response to file  
        writeToFile(fileName, data)
    )
}


// Function call to initialize app
init();
