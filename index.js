// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./utils/generateMarkdown');
const { inherits } = require('util');

// array of questions for user input
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
        message: 'What is your project name:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide directions for installation:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please write a short description on usage:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list ways of how to contribute:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide direction of any tests to run:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have? (use arrow keys)',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
];

// 
function writeToFile() {
        return inquirer.prompt(questions)
            .then((answers)=> {
                const mark = MarkDown.generateMarkdown(answers)
                fs.writeFile('readme.md', mark, function(err) {
                    if(err) { 
                        console.log('Could not generate file')
                    } else {
                        console.log('Success: new readme.md generated inside the current folder')
                    }
                })
            })
            .catch((error)=> {
                console.log(error)
            })
    }

 writeToFile();
 
//  init();