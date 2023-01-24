// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = license.replaceAll('-','_')
 return `https://img.shields.io/badge/License-${licenseBadge}-2ea44f`
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

if (license === 'None') {
    return ''

  } else {

  return `## License 
  Licensed for use under <a href=${licenseLink}>${license}</a>
  ![](${licenseBadge})`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  
  var licenseContents = ''
  license = answers.license

  var licenseSection = renderLicenseSection(license)
  
  // Show license in contents if not empty string
  if (licenseSection !== '') {
    licenseContents = `- [License](#license)`
  }

return `# ${answers.projectName} by ${answers.userName}b


 ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${licenseContents}
  
## Description
  ${answers.projectDesc}
  ## Installation
  ${answers.installIns}
  ## Contributing
  ${answers.contribution}
  ## Usage
  ${answers.usageIns}
  ## Tests
  ${answers.testingIns}
  ## Questions
  Created by [${answers.userName}](https://github.com/${answers.userName})
  If you have any questions about this project please contact me at [${answers.email}](mailto:${answers.email}).

  ${licenseSection}
`;
}

module.exports = generateMarkdown;
