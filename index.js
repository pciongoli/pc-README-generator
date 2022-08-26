// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// Create an array of questions for user input
function promptUser() {
   return inquirer.prompt([
      {
         type: "input",
         name: "title",
         message: "What is the title of your project?",
         // implement validation to ensure user does not miss any important questions
         validate: (titleInput) => {
            if (titleInput) {
               return true;
            } else {
               console.log("Please input the title of your proejct!");
               return false;
            }
         },
      },
      {
         type: "input",
         name: "technology",
         message: "Please enter the technology you used to create this project",
         validate: (titleInput) => {
            if (titleInput) {
               return true;
            } else {
               console.log("Please input the tech you used for your project!");
               return false;
            }
         },
      },
      {
         type: "input",
         name: "installation",
         message: "What is the installation process for your project?",
         validate: (installationInput) => {
            if (installationInput) {
               return true;
            } else {
               console.log(
                  "Please enter the installation process for your project!"
               );
               return false;
            }
         },
      },
      {
         type: "input",
         name: "description",
         message: "Give a description of your project.",
         validate: (descriptionInput) => {
            if (descriptionInput) {
               return true;
            } else {
               console.log("Please input your project description!");
               return false;
            }
         },
      },
      {
         type: "checkbox",
         name: "license",
         message: "Select a license for your project",
         choices: [""],
      },
      {
         type: "input",
         name: "contributing",
         message: "Who is the author of this project?",
         validate: (contributingInput) => {
            if (contributingInput) {
               return true;
            } else {
               console.log("Please enter your name!");
               return false;
            }
         },
      },
      {
         type: "input",
         name: "tests",
         message: "Please provide instruction on any tests you have.",
         default: false,
      },
      {
         type: "input",
         name: "contact",
         message: "Enter the best email to reach you.",
      },
   ]);
}

async function init() {
   try {
      // prompt User questions
      const answers = await promptUser();
      // genereate users answers through
      const generateREADME = generateMarkdown(answers);
      // write README.me file inside of the dist folder/directory
      await writeFileAsync("./dist/README.md", generateREADME);
      // inform user if successfully created
      console.log(
         "New Professional README.md has been generated. Check out README.md in the 'dist' folder!"
      );
   } catch (err) {
      console.log(err);
   }
}

// Function call to initialize app
init();
