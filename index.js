// TODO: Include packages needed for this application
// npm init, npm install, 

// TODO: Create an array of questions for user input

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
//     fs.writeFile('readMe.md', data);

inquirer.prompt(questions)
    .then((answers) => {
        const readmeAnswers = generateMarkdown(answers);
    
        fs.writeFile('readme.md', readmeAnswers, (err) => 
            err ? console.log(err) : console.log("Success")
        ) 
    });
        

// const writeFile = async (filePath) => {
//     try {
//         const contents = await fs.writeFile('readme.md', data);
//         console.log(contents);    
//     } catch (err) {
//         console.error(err.message);
//     }
// }

writeFile('readme.md');

// TODO: Create a function to initialize app
// function init() {}


// Function call to initialize app
// init();

// const badmath = require('./filename');
// module.exports = "string", 5, Object
// module.exports = {
//     pie,
//     predictable
// }


