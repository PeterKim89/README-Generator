// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');

const generateReadMe = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
// Project title, description, installation instructions, usage information, contribution guidelines, test instructions, license, github username, email, 
const questions = () => {
    return inquirer.prompt([
        // takes in user input for project title
        {
            type: "input",
            name: "title",
            message: "What's your project's title?"
        },  
        // takes in user input for project descriptions
        {
            type: "input",
            name: "description",
            message: "Write a short description for your project."
        },
        // takes in user input for installation
        // defaults to npm i
        {
            type: "input",
            name: "installation",
            message: "What command should be run to install dependencies?",
            default: "npm i"
        },
        // takes in user input for any project usage information
        {
            type: "input",
            name: "usage",
            message: "What should be known to use your project?"
        },
        // takes in user input for any project contribution methods
        {
            type: "input",
            name: "contribution",
            message: "What should be known to contribute to your project?",
        },
        // takes in user input for tests
        // defaults to npm test
        {  
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?",
            default: "npm test"
        },    
        // takes in user input for their GitHub username
        {
            type: "input",
            name: "username",
            message: "What's your GitHub username?",
        },
        // takes in user input for their email
        {
            type: "input",
            name: "email",
            message: "What's your email?",
        },
        // displays a list of licenses
        // defaults to MIT license
        // user can choose 1 using arrow keys
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
    // function to write the file with passed data
    fs.writeFile(fileName, data, err => {
        // checks if there's an error, if yes: console logs the error. if no: console logs a success message
        err ? console.log(err) : console.log("The README has been successfully created!");
    });
}

// TODO: Create a function to initialize app
function init() {
    // prompts the array of questions
    questions()
    // user answers are then passed to the generateReadMe function to fill in user specific data
    .then (answers => {
        return generateReadMe(answers);
    })
    // writes the actual file using the data
    .then (data => {
        return writeToFile("Generated-README", data);
    })
    .catch (err => {
        console.log(err);
    })
}   

// Function call to initialize app
init();
