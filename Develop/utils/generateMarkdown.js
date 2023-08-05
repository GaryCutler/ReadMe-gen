// TODO: Create a function that returns a license badge based on which license is passed in
// If there is ino license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
  
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// ['Apache2', 'MIT', 'GNUGPLv3', 'AGPLv3', 
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return 'https://choosealicense.com/licenses/mit/';
  } else if (license === 'Apache2'){
    return 'https://choosealicense.com/licenses/apache-2.0/';
  } else if (license === 'GNUGPLv3'){
    return 'https://choosealicense.com/licenses/gpl-3.0/';
  } else if (license === 'AGPLv3')
    return 'https://choosealicense.com/licenses/agpl-3.0/';

}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None"){
    return "";
  }else{
    return `License:
    ${license} ${renderLicenseBadge(license)}
    `;
  };

};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseChoice = data.license;
  return `
  # Project title
  ${data.title} 
  # Description
  ${data.description}

  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#installation)
  * [Contributing](#contributing)
  * [Tests](#cests)
  * [contact Information](#contact-Information)
  
  # Installation instructions
  ${data.installation}
  
  # Usage
  ${data.usage}
  
  # Contributions
  ${data.contribution}

  # Test Instruction 
  ${data.testing}
  
  # License
${renderLicenseSection(licenseChoice)}
${renderLicenseLink(licenseChoice)}

  # Contact-Information 
  * GitHub Username:${data.username}
  * Contact Email:${data.useremail}
`;
}
module.exports = generateMarkdown;
