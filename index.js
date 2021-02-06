// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
    {
        // User's GitHub Name
        type: "input",
        name: "github",
        message: "What is your GitHub username? (Required)",
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        }
    },
    {
        // User's email address
        type: "input",
        name: "email",
        message: "Enter your email address where you can be reached for questions"
    },
    {
        // Title of the project
        type: "input",
        name: "title",
        message: "What is the title of the project? (Required)",
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("You need to enter a project title!");
            return false;
          };
        } 
    },
    {
        // Installation information
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        // Usage information
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        // Deployed application link
        type: "input",
        name: "deployed",
        message: "Enter the deployed application link"
    },
    {
        // Description of the project
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("You need to enter a project description!");
            return false;
          };
        }
    },
    {
        // What coding languages did you use?
        type: "checkbox",
        name: "languages",
        message: "What languages did you use for this project? (Check all that apply)",
        choices: ["JavaScript", "HTML", "CSS", "jQuery", "Bootstrap", "Node"]
      },
    {
        // Screenshot
        type: "input",
        name: "screenshot",
        message: "Enter the URL to your application/webpage screenshot"
    },
    {
        // Licensing information
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: ["None", "MIT", "Apache 2.0", "GNU"]
    },
    {
        // Contributing information
        type: "input",
        name: "contributing",
        message: "If you would like other developers to contribute to this project, add guidelines for how to do so."
    },
    {
        // Tests
        type: "input",
        name: "tests",
        message: "If you wrote tests for your application, explain how to run them. If not, leave this blank."
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    // Uses the node path module & process.cwd function to join the current working directory to the file name passed to it from the init function
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// Function to initialize the application
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log("Your README file is now being generated. You will find the completed file in the 'dist' folder.")
       writeToFile("/dist/README.md", generateMarkdown({ ...inquirerResponses }));
    })
};

// Function call to initialize app
init();
