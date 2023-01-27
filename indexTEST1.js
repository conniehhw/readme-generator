const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./utils/generateMarkdown');

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
        type: 'input',
        name: 'installation',
        message: 'Please provide directions for installation'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please write a short description on usage'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please list ways of how to contribute',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide direction of any tests to run',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have? (use arrow keys)',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
];


// inquirer.prompt(questions)
//     .then((answers) => {
//         fs.writeFile('readme.md', JSON.stringify(answers, null, "\t"), (err) => 
//             err ? console.log(err) : console.log("Success"))

//     })        
//     .catch((error) => {
//         if (error.isTtyError) {
//             // Prompt couldn't be rendered in the current environment
//           } else {
//             // Something else went wrong
//           }
//         });

function runQuery() {
        return inquirer.prompt(questions)
            .then((answers)=> {
                const mark = MarkDown.generateMarkdown(answers)
                fs.writeFile('README.md', mark, function(err) {
                    if(err) { 
                        console.log('Could not save file')
                    } else {
                        console.log('Success: new file generated inside the current folder')
                    }
                })
            })
            .catch((error)=> {
                console.log(error)
            })
    }

 runQuery()