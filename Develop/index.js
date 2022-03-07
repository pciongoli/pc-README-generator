// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please input the title of your proejct!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What is the installation process for your project?',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter the installation process for your project!')
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select a license for your project',
            choices: ['']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who is the author of this project?',
            validate: contributingInput => {
                if (contributingInput) {
                    return true;
                } else {
                    console.log('Please enter your name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide instruction on any tests you have.',
            default: false
        },
        {
            type: '',
            name: 'contact',
            message: 'Enter '
        }
        
        
   
    ])

};

promptUser()
.then(generateREADME => {
    // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('.README.md', )
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
})
