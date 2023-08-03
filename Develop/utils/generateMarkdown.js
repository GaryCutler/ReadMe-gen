// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
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
  # Project title
  #${data.title} 

  # Description
  ${data.description}

  # Table of Contents 
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [License](#-Installation)
  * [Contributing](#-Contributing)
  * [Tests](#-Tests)
  * [Questions](#-Contact-Information)
  
  # Installation instructions
  ${data.installation}
  
  # Usage
  ${data.usage}
  
  # Contributions
  ${data.contribution}

  # Test Instruction 
  ${data.testing}
  # License 
  ${data.license}

  # Contact Information 
  * GitHub Username:${data.username}
  * Contact Email:${data.useremail}
`;
}
module.exports = generateMarkdown;
