// Include packages needed for this application
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
               console.log("Please input the title of your project!");
               return false;
            }
         },
      },
      {
         type: "input",
         name: "technology",
         message: "Please enter the technology you used to create this project",
         validate: (technologyInput) => {
            if (technologyInput) {
               return true;
            } else {
               console.log(
                  "Please input the technology you used for your project!"
               );
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
         type: "list",
         name: "license",
         message: "Select a license for your project",
         choices: ["MIT", "Apache 2.0", "GPL", "BSD", "No License"],
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
         message: "Please provide instructions on any tests you have.",
         default: "No tests available.",
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
      // prompt user questions
      const answers = await promptUser();
      // generate README using user's answers
      const generateREADME = generateMarkdown(answers);
      // write README.md file inside of the dist folder/directory
      await writeFileAsync("./dist/README.md", generateREADME);
      // inform user if successfully created
      console.log(
         "New professional README.md has been generated. Check out README.md in the 'dist' folder!"
      );
   } catch (err) {
      console.log(err);
   }
}

// Function call to initialize app
init();
