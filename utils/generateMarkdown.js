// This function generates the badge for the license selected by the user
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)`
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)`
  } else if (license === "GPL") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](./LICENSE)`
  } else if (license === "None") {
    return ``
  }
}

// This function generates the link for the license selected by the user
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](LICENSE)`;
  }
  if (license === "Apache") {
    return `[Apache](LICENSE)`
  }
  if (license === "GPL") {
    return `[GPL](LICENSE)`
  }
  if (license === "None") {
    return ``
  }
}

//Added function to generate license section of table of contents if license is selected
function hasLicense(license) {
  if (license === "None") {
    return ``;
  } else {
    return `* [License](#license)` 
  }
};


// This function generates the license section of the README
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `## License\nThis project is licensed under the ${renderLicenseLink(license)} license`
  }
  if (license === "Apache") {
    return `## License\nThis project is licensed under the ${renderLicenseLink(license)} license.`
  }
  if (license === "GPL") {
    return `## License\nThis project is licensed under the ${renderLicenseLink(license)} license.`
  }
  if (license === "None") {
    return ``;
  }
}

// This function generates the README text. 
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
* Email: ${data.email}`
}

module.exports = generateMarkdown
