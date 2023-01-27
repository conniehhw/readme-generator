// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(answers) {
//   return `# ${answers.projectname}` 
// }

class MarkDown {

  static renderLicenseBadge(license){
    const badges = {
      GPL3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)',
      apache: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)',
      MIT: '[![License: MIT](https://imgshields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)',
      BSD3: '[!License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)(https://choosealicense.com/licenses/bsd-3-clause-clear/)'
    }
      return badges[license]
  }

  static renderLicenseLink(license) {
    const licenseLinks = {
      GPL3: '[![License: GPL3](https://choosealicense.com/licenses/gpl-3.0/)',
      apache: '[![License: apache](https://choosealicense.com/licenses/apache-2.0/)',
      MIT: '[![License: MIT](https://choosealicense.com/licenses/mit/)',
      BSD3: '[!License: BSD 3](https://choosealicense.com/licenses/bsd-3-clause-clear/)'
   }

   return licenseLinks[license]
  }


  static generateMarkdown(answers) {
    return ` 
  # ${answers.projectname}  

  ${this.renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}


  ## Table of Contents
  - [Installation] (#Installation)
  - [usage] (#Usage)
  - [Contributing] (#Contributing)
  - [Tests] (#Tests)
  - [License] (#License)
  - [Questions] (#Questions)

  
  ## Installation
  ${answers.installation}


  ## Usage
  ${answers.usage}


  ## Contributing
  ${answers.contribution}



  ## Tests
  ${answers.tests}


  ## License
  ${this.renderLicenseLink(answers.license)}



  ## Questions
  If you have additional questions about the repo, you can contact me directly at ${answers.email}. You can find more of my work at ${answers.username} [username](https://github.com/username).


    `
  }
}

module.exports = MarkDown;
