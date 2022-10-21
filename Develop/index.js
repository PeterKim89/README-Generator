// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Project title, description, installation instructions, usage information, contribution guidelines, test instructions, license, github username, email, 
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            "What's your project's title?"
        },  
        {
            type: "input",
            "Write a short description for your project."
        },
        {
            type: "input",
            "Write some installation instructions for your project."
        },
        {
            type: "input",
            "How do you use your project?"
        },
        {
            type: "input",
            "Write some contribution guidelines for others.",
        },
        {  
            type: "input",
            "Write some example tests for your project.",
        },    
        {
            type: "input",
            "What's your GitHub username?",
        },
        {
            type: "input",
            "What's your email?",
        },
        {
            type: "list",
            "Choose a license for your project."
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
