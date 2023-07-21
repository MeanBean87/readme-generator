const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown.js")
const fs = require("fs");

// This specifies the path to the README file
const readmePath = "./NEW-README.md"

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
]

// This function writes the README file
function writeReadme(path, data) {
  fs.writeFile(path, data, (error) => {
    if (error) {
      console.error(`Error writing README file: ${error}`)
    } else {
      console.log(
        "Success!\nYour file has been generated.\nYour New README file is located in the root directory of this project under the name NEW-README.md."
      );
    }
  })
}

// TODO: Create a function to initialize app
async function init() {
  const answers = await inquirer.prompt(questions)
  writeReadme(readmePath, generateMarkdown(answers))
}

// Function call to initialize app
init()
