// This function generates the badge for the README or nothing if the string is empty
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

// This function returns the license link of README or nothing if the string is empty
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT](LICENSE)`;
  }
  if (license === "Apache") {
    return `[Apache](LICENSE)`;
  }
  if (license === "GPL") {
    return `[GPL](LICENSE)`;
  }
  if (license === "None") {
    return ``;
  }
}

// This function returns the license section of README or nothing if the string is empty
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

// This function returns generates the license section of the Table of Contents or nothing if the string is empty
function renderLicenseToc(license) {
  if (license === "") {
    return ``;
  } else {
    return `* [License](#license)`;
  }
}


// This function generates the markdown for README
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
${renderLicenseToc(data.license)}
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
