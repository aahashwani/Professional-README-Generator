// Include packages needed for this application (done)
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "What is a short description?",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Description is required");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Enter instructions for installation of project:",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Installing instructions are required");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter what can this project be used for?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Enter names of contributors for the project:",
  },
  {
    type: "input",
    name: "testing",
    message: "Provide instructions to test your project:",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Testing instructions are required");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: [
      "Apache",
      "Boost",
      "Eclipse",
      "GNU",
      "IBM",
      "MIT",
      "Mozilla",
      "Perl",
      "Zlib",
      "No license",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your github username:",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("GitHub username is required");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address (optional):",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", (err) => console.log(err));
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      const markDownString = generateMarkdown(answers);
      writeToFile("readme.md", markDownString);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
