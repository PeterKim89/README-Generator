// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// Project title, description, installation instructions, usage information, contribution guidelines, test instructions, license, github username, email, 
const questions = () => {
    return inquirer.prompt([
        {
            "What's your project's title?"
        },  
        {
            "Write a short description for your project."
        },
        {
            "Write some installation instructions for your project."
        },
        {
            "How do you use your project?"
        },
        {
            "Write some contribution guidelines for others.",
        },
        {  
            "Write some example tests for your project.",
        },    
        {
            "What's your GitHub username?",
        },
        {
            "What's your email?",
        },
        {
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
