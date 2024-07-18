// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'None') {
        return '';
    }
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
  
//The badge becomes visable in opened in pre-view

  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'None') {
      return '';
    }
    return `\n* [License](#license)\n`;
}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
      return '';
    }
    return `## License
  
This project is licensed under the ${license} license.`;
}
  
  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
    ${renderLicenseBadge(data.license)}
  
## Description
${data.description}
  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseLink(data.license)}
  
## Installation
${data.installation}
  
## Usage
${data.usage}
  
## Contribution
${data.contribution}
  
## Tests
${data.test}
  
## Questions
If you have any questions about the project, please feel free to reach out to me:
  
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
${renderLicenseSection(data.license)}
  
`;
}
  
module.exports = generateMarkdown;
  
  