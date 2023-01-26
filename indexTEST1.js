const inquirer = require('inquirer');
const fs = require('fs');

const questions = [ 
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'projectname',
        message: 'What is your project name'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
];


inquirer.prompt(questions)
    .then((answers) => {
        fs.writeFile('readme.md', JSON.stringify(answers), (err) => 
            err ? console.log(err) : console.log("Success")
        )})
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
          }
        });
    
  
        
