// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licensePage;
  switch(license) {
    case 'MIT':
      licensePage = 'https://choosealicense.com/licenses/mit/';
      break;
    case 'Apache License 2.0':
      licensePage = 'https://choosealicense.com/licenses/apache-2.0/';
      break;
    case 'Mozilla Public License 2.0':
      licensePage = 'https://www.mozilla.org/en-US/MPL/2.0/';
      break;
    case 'GNU GPL':
      licensePage = 'https://www.gnu.org/licenses/gpl-3.0.html';
      break;
    case 'ISC':
      licensePage = 'https://choosealicense.com/licenses/isc/';
      break;
    case 'None':
      licensePage = '';
      break;
  }
  return licensePage;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is covered under [${license}](${renderLicenseLink(license)}).`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ### Table of Contents

  - [Running the Project](#install)
  - [Installation](#installation)
  - [Purpose](#purpose)
  - [Testing](#testing)
  - [Credits](#contribute)
  - [License](#license)
  - [Questions?](#contact)

  ## Installation

  ${data.installation}
  
  ## Purpose
  
  ${data.purpose}
  
  ## Testing
  
  ${data.testing}

  ## Contributions
  
  ${data.contributions}
  
  ## License
  
  ${renderLicenseSection(data.license)}

  ## Questions?

  ${data.contact}  

`;
}

module.exports = generateMarkdown;