// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 return `https://img.shields.io/badge/License-${license}-2ea44f`
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://opensource.org/licenses/${license}`
}
 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseBadge = renderLicenseBadge(license)
  var licenseLink = renderLicenseLink(license)

  return `## License 
  [Licensed for use under <a href=${licenseLink}>${license}]</a>
  ![](${licenseBadge})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  
  
  license = answers.license

  var licenseSection = renderLicenseSection(license)

  return `# ${answers.projectName}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Usage](#testing-instructions)
  - [Credits](#credits)
  - [License](#license)
  
  ## Description
  ${answers.projectDesc}
  
  ## Installation
  ${answers.installIns}
  ## Usage
  ${answers.usageIns}
  ## Credits
  ${answers.credits}
  ${licenseSection}
`;
}

module.exports = generateMarkdown;
