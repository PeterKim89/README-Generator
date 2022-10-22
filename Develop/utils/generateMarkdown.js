// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLink = "";
  // if MIT is chosen, returns MIT badge
  if (license === "MIT") {
    badgeLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }
  // if APACHE is chosen, returns APACHE badge
  else if (license === "APACHE 2.0") {
    badgeLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  }
  // if GPL is chosen, returns GPL badge
  else if (license === "GPL 3.0") {
    badgeLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  }
  // if BSD is chosen, returns BSD badge
  else if (license === "BSD 3") {
    badgeLink = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  }
  // if none chosen, returns an empty string
  return badgeLink;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  // if MIT is chosen, returns MIT license link
  if (license === "MIT") {
    licenseLink = "(https://opensource.org/licenses/MIT)";
  }
  // if APACHE is chosen, returns MIT license link
  else if (license === "APACHE 2.0") {
    licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
  }
  // if GPL is chosen, returns MIT license link
  else if (license === "GPL 3.0") {
    licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
  }// if BSD is chosen, returns MIT license link
  else if (license === "BSD 3") {
    licenseLink = "(https://opensource.org/licenses/BSD-3-Clause)";
  }
  // if none chosen, returns an empty string
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = "";
  // if MIT is chosen, returns MIT license
  if (license === "MIT") {
    licenseText = `## License
    [MIT]${renderLicenseLink("MIT")}
    `
  }
  // if MIT is chosen, returns APACHE license
  else if (license === "APACHE 2.0") {
    licenseText = `## License\n
    [APACHE 2.0]${renderLicenseLink("APACHE 2.0")}
    `
  }
  // if MIT is chosen, returns GPL license
  else if (license === "GPL 3.0") {
    licenseText = `## License\n
    [GPL 3.0]${renderLicenseLink("GPL 3.0")}
    `
  }
  // if MIT is chosen, returns BSD license
  else if (license === "BSD 3") {
    licenseText = `## License\n
    [BSD 3]${renderLicenseLink("BSD 3")}
    `
  }
  // if none chosen, returns an empty string
  return licenseText;
}

// TODO: Create a function to generate markdown for README
// formats how the readme should look and where to put user data
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
`;
}

module.exports = generateMarkdown;
