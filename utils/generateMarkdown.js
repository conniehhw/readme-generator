// functions to render license badge, link and section

class MarkDown {

  static renderLicenseBadge(license){
    const badges = {
      MIT: '[![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)',
      APACHE: '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)',
      GPL3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)',
      BSD3: '[![License BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://choosealicense.com/licenses/bsd-3-clause-clear/)'
    }
      return badges[license]
  }


  static renderLicenseLink(license) {
    const licenseLinks = {
      MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
      APACHE: '[APACHE](https://choosealicense.com/licenses/apache-2.0/)',
      GPL3: '[GPL3](https://choosealicense.com/licenses/gpl-3.0/)',
      BSD3: '[BSD 3](https://choosealicense.com/licenses/bsd-3-clause-clear/)'
   }
    return licenseLinks[license]
  }

  static renderLicenseSection(license){
    if(license) {
      return `Licensed under the ${this.renderLicenseLink(license)} license`
    } else {
      return ''
    }
  }
  
  // export content & prompt inputs to readme.md
  static generateMarkdown(answers) {
    return ` 
  # ${answers.projectname}  

  ${this.renderLicenseBadge(answers.license)}
  

  ## Description
  ${answers.description}
  



  ## Table of Contents
  - [Installation](#installation)
  - [usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
 



  ## Installation
  Click [here](https://drive.google.com/file/d/1X2eI7_ovsnll62cR3eTkquUjK4zZf8he/view) to see a walkthrough video.
  ${answers.installation}
 





  ## Usage
  ${answers.usage}
  





  ## Contributing
  ${answers.contribution}






  ## Tests
  ${answers.tests}
 




  ## License
  ${this.renderLicenseSection(answers.license)}

  



  ## Questions
  If you have additional questions about the repo, you can contact me directly at ${answers.email}. You can find more of my work at ${answers.username} (https://github.com/${answers.username}).
 


    `
  }
}

module.exports = MarkDown;
