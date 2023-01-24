

// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of your project?',
    'Enter your gitHub username',
    'Enter your email',
    'Enter a brief description of what this project does',
    'Enter guidelines for contributing to your project',
    'Write installation instructions to run this project',
    'Write instructions for testing this code',
    'What type of license would you like to use?',
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(`./${fileName}.md`, generateMarkdown(answers), err => {
        if (err) {
            console.log(err)
        }
        // file written successfullu
    })
    
    console.log(generateMarkdown(answers))
    
    // fs.appendFile(`${fileName}.txt`, JSON.stringify(data), (err) =>
    //         err ? console.error(err) : console.log('sent user responses to txt!'))


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
            message: questions[2],
            name: 'email',
        },
        {
            // Get user project description
            type: 'input',
            message: questions[3],
            name: 'projectDesc',
        },
        {
            // Get credits
            type: 'input',
            message: questions[4],
            name: 'contribution',
        },
        {
            // Get install instructions
            type: 'input',
            message: questions[5],
            name: 'installIns',
        },
        {
            // Testing Instructions
            type: 'input',
            message: questions[6],
            name: 'testingIns',
        },
        {
            // Get license
            type: 'rawlist',
            message: questions[7],
            name: 'license',
            choices: [  'None', 'Apache-2.0','BSD-3-Clause', 'BSD-2-Clause',
                        'gpl-license', 'lgpl-license', 'MIT', 'MPL-2.0',
                        'CDDL-1.0', 'EPL-2.0', ],
        },
    ])
    .then((answers)=>{
     // Write response to file  
        fileName = `${answers.projectName.replaceAll(' ','-')}-README`;
        writeToFile(fileName, answers)
    }
    )
}
// Function call to initialize app
init();
