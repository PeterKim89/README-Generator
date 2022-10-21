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
            message: "Write some installation instructions for your project."
        },
        {
            type: "input",
            name: "usage",
            message: "How do you use your project?"
        },
        {
            type: "input",
            name: "contribution",
            message: "Write some contribution guidelines for others.",
        },
        {  
            type: "input",
            name: "tests",
            message: "Write some example tests for your project.",
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
            message: "Choose a license for your project."
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
