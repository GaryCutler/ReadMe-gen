// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'title',
        message: 'What is your name of the project?'
    },
    {
        type: "input",
        name: 'description',
        message: 'enter a project desription.',
    },
    {
        type: "input",
        name: 'installation',
        message: 'enter installation instructions',
    },
    {
        type: "input",
        name: 'usage',
        message: 'enter usage information',
    },
    {
        type: "input",
        name: 'contribution',
        message: 'enter the contibution guidelines',
    },
    {
        type: "input",
        name: 'testing',
        message: 'enter the testing instructions'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license should your project have? (Choose one)',
        choices: ['Apache2', 'MIT', 'GNUGPLv3', 'GNUGPLv2', 'ISC']
    },
    {
        type: "input",
        name: 'username',
        message: 'enter your github username'
    },
    {
        type: "input",
        name: 'useremail',
        message: 'enter your email'
    },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err){
            return console.log(err);
         }
         console.log("README has been generated")
     });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", data);
    });
}

// Function call to initialize app
init();
