const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

const filePath = './output/README.md';


const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage instructions for your project.",
  },
  {
    type: "input",
    name: "credits",
    message: "Please provide credits for your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    type: "input",
    name: "badges",
    message: "Please provide badges for your project.",
  },
  {
    type: "input",
    name: "features",
    message: "Please provide features for your project.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide contributing information for your project.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide tests for your project.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = './output/README.md';

    fs.appendFileSync(filePath, data, (err) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(`Error writing README file: ${err}`);
    } else {
      console.log(
        "Success!\nYour file has been generated.\nPlease check out the README.md file in the output folder."
      );
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
