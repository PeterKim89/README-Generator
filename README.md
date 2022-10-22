# README-Generator

## Introduction
Any good project repository needs a good README. That's why in this project, I created a README generator.
The user can quickly enter in their project's information and their own personal information. 
Then a README with all of their input information will be created.

## Build Process
The necessary questions were first compiled. Those questions were then translated into an inquirer prompt with input types and names.
Next the writeToFile and init functions were created to pass the user data to the generate function.
A general readme template was first made inside the generateMarkdown function. Points where user data was needed was filled in with template literals.
Finally the functions handling the license and license badge were written. These functions were then placed into their proper places within the generateMarkdown function.

## Code Snippet
This shows how the READMEs are created following a specific format. 

```
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  * [Description][#description]
  * [Installation][#installation]
  * [Usage](#usage)
  * [Contributiions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribution}

  ## Tests 
  ${data.tests}

  ## Author
  [GitHub](https://www.github.com/${data.username})
  [Email] ${data.email}

  ## Questions
  If you have any other questions, please contact me at ${data.email}.

  ${renderLicenseSection(data.license)}
```

## Usage
First clone a copy of the repo.
Navigate to the Develop folder in terminal.
Run the command 'node index.js'
Answer the questions relating to your project and contact information.
If successful, a readme will be created in the develop folder.

## Languages and Technology


## Author


## License