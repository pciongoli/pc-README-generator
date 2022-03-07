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
            type: 'input',
            name: 'description',
            message: 'Give a description of your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please input your project description!');
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
            type: 'input',
            name: 'contact',
            message: 'Enter the best email to reach you.'
        }
        
    ]);

}


function writeToFile(fileName, data) {
    fs.writeFile('.README.md', generateMarkdown, err => {
        if (err) throw new Error(err);

        console.log('New Professional README.md has been generated. Check out README.md in')
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(userInput => {
        return generateMarkdwon(userInput);
    }); 
}

// Function call to initialize app
init();
