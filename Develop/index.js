// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Project title, description, installation instructions, usage information, contribution guidelines, test instructions, license, github username, email, 
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What's your project's title?"
        },  
        {
            type: "input",
            name: "description",
            message: "Write a short description for your project."
        },
        {
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?",
            default: "npm i"
        },
        {
            type: "input",
            name: "usage",
            message: "What should be known to use your project?"
        },
        {
            type: "input",
            name: "contribution",
            message: "What should be known to contribute to your project?",
        },
        {  
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?",
            default: "npm test"
        },    
        {
            type: "input",
            name: "username",
            message: "What's your GitHub username?",
        },
        {
            type: "input",
            name: "email",
            message: "What's your email?",
        },
        {
            type: "list",
            name: "license",
            message: "Choose a license for your project.",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"],
            default: ["MIT"]
        }
]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("The README has been successfully created!");
    });
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
