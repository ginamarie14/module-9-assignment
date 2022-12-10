// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "How would you describe your project?",
      name: "description",
    },
    {
      type: "input",
      message: "How can your project be accessed or run?",
      name: "installation",
    },
    {
      type: "input",
      message: "How is your application used?",
      name: "purpose",
    },
    {
      type: "input",
      message: "How can we test your app?",
      name: "testing",
    },
    {
      type: "input",
      message:"Any credits/contributions?",
      name: "contributions",
    },
    {
      type: "list",
      message: "Is there a license? If yes, which?",
      choices: ["MIT", "Apache", "Mozilla", "GNU GPL", "ISC", "None"],
      default: "None",
      name: "license",
    },
    {
      type: "input",
      message:"How can we reach out to you?",
      name: "contact",
    }
  ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your README has been generated.")
    }
  })
};

// TODO: Create a function to initialize app
function init () {
  inquirer.prompt(questions)
    .then((response) => 
        writeToFile('README.md', generateMarkdown(response))
    )
};

// Function call to initialize app
init();