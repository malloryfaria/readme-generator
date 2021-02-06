// Function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  // If there is no license, return an empty string
  if (license === "None") {
    return "";
  } // Else, display the License badge
  return `![GitHub license](https://img.shields.io/badge/license-${license}-ff69b4.svg)`;
}

// Function that returns the license link

function renderLicenseLink(license) {
  // If there is no license, return an empty string
  if (license === "None") {
    return "";
  } // Else, return the license link
  return `\n* [License](#license)\n`;
}

// Function that returns the license section of README

function renderLicenseSection(license) {
  // If there is no license, return an empty string
  if (license === "None") {
    return "";
  } // Else, display the License section in the ReadMe
  return `## License

  This project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}  <br />

${renderLicenseBadge(data.license)} <br />

## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Deployed](#deployed)
- [Languages](#languages)
- [Screenshot](#screenshot)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

<br />
<br />

## Description

${data.description} <br />

## Installation

\`\`\`
${data.installation}
\`\`\`
<br />

## Usage

${data.usage} <br />

## Deployed application link

${data.deployed} <br />

## Languages/Technology Used

${data.languages} <br />

## Screenshot
![${data.title}](${data.screenshot}?raw=true) <br /> 

${renderLicenseSection(data.license)} <br />
  
## Contributing

${data.contributing} <br />

## Tests

\`\`\`
${data.test}
\`\`\`
<br />

## Questions?

If you have any questions about the project, contact me at: 
(mailto:${data.email}) <br />
Check out the rest of my work at: 
[${data.github}](https://github.com/${
    data.github
  }/) <br />
`;
}

module.exports = generateMarkdown;
