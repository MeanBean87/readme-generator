//Imports for the packages that will be used
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// This is the path to the README file
const readmePath = "./NEW-README.md";

// This array contains the questions that will be asked to the user
const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    message: "Please provide a description of your project:",
  },
  {
    name: "installation",
    message: "Please provide installation instructions for your project:",
  },
  {
    name: "usage",
    message: "Please provide usage instructions for your project:",
  },
  {
    name: "contributing",
    message: "Please provide contributing information for your project:",
  },
  {
    name: "tests",
    message: "Please provide tests for your project:",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for your project:",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    name: "username",
    message: "Please provide your Git Hub username:",
  },
  {
    name: "email",
    message: "Please provide your email address:",
  },
];

// This function writes the README file
function writeReadme(path, data) {
  fs.writeFile(path, data, (error) => {
    if (error) {
      console.error(`Error writing README file: ${error}`);
    } else {
      console.log(
        "Success!\nYour file has been generated.\nPlease check out the README.md file in the output folder."
      );
    }
  });
}

// This function starts the app when node index.js is run
async function init() {
  const answers = await inquirer.prompt(questions);
  writeReadme(readmePath, generateMarkdown(answers));
}

// Call to the init function to start the app
init();
