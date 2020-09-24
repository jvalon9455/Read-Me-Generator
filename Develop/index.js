// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [];

// create prompt questions for user input
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please write a brief description of your project?",
            name: "description"
        },
        
        {
            type: "input",
            message: "How do you install your project?",
            name: "installation",
        },

        {
            type: "input",
            message: "What is the usage criteria for your project?",
            name: "usage",
        },
        
        {
            type: "input",
            message: "Who or what helped contribute to your project?",
            name: "contributors"
        },

        {
            type: "input",
            message: "How do you test your project?",
            name: "test",
        },
        {
            type: "list",
            choices: ["MIT", "Apache", "Mozilla"],
            name: "license",
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "username",

        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
    ])
    .then((answers) => {
        console.log(answers);
        var readMe = generateMarkdown (answers);
        fs.writeFile("generate.md", readMe, err => {
            if(err) throw err;
            console.log("ReadMe works");
        })
    })
 
    
// // function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {

}

// function call to initialize program
init();
