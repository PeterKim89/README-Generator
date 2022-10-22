// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLink = "";
  if (license === "MIT") {
    badgeLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else if (license === "APACHE 2.0") {
    badgeLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  else if (license === "GPL 3.0") {
    badgeLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }
  else if (license === "BSD 3") {
    badgeLink = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  }
  else if (!license) {
    return badgeLink;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
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
  ${data.username}

  ## Questions
  If you have any other questions, please contact me at ${data.email}.
`;
}

module.exports = generateMarkdown;
