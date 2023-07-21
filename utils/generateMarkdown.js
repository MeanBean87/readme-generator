// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)`;
  } else if (license === "GPL") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)`;
  } else if (license === "None") {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  }
  if (license === "Apache") {
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === "GPL") {
    return `[GPL](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license === "None") {
    return ``;
  }
}

//Added function  to generate license section of table of contents if license is selected
function hasLicense(license) {
  if (license === "None") {
    return ``;
  } else {
    return `* [License](#license)` 
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `## License\nThis project is licensed under the ${renderLicenseLink(license)} license`;
  }
  if (license === "Apache") {
    return `## License\nThis project is licensed under the ${renderLicenseLink(license)} license.`;
  }
  if (license === "GPL") {
    return `## License\nThis project is licensed under the ${renderLicenseLink(license)} license.`;
  }
  if (license === "None") {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
        
## Description
${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents    
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
${hasLicense(data.license)}
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}   

## Contributing
${data.contributing} 

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
Feel free to reach out to me with any questions!
* ${data.username}: [Github](https://github.com/${data.username})
* Email: ${data.email}`;
}

module.exports = generateMarkdown;
