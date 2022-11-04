// Required packages
const inquirer = require("inquirer");
const fs = require("fs")
const md = require("./utils/generateMarkdown.js");

// set of questions for inquirer
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the desired title of the project:"
    },
    {
        type: "input",
        name: "overview",
        message: "Please enter a description of the project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter the required instructions to install this project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please specify the usage of this project:"
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter the corrosponding contribution guidelines:"
    },
    {
        type: "input",
        name: "testing",
        message: "Please enter the necessery instructions to test this project:"
    },
    {
        type: "list",
        name: "license",
        message: "Select from one of the valid licenses displayed below:",
        choices: ['Zlib', 'MIT', 'ISC']
    },
    {
        type: "input",
        name: "email",
        message: "Please enter a contact email:"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username:"
    },
];

// This function will writes the data to a file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, e => {
        e ? console.log(`Error ${e}`) : 
        console.log(`Successfully wrote to ${fileName}`); 
    });

}

function init() {
    // receives the data from the answered questions
    inquirer.prompt(questions)
    .then(response => {
        // writes/creates the READme file, with users entered info
        writeToFile("README.md", md(response)); 
    });
}

// Function call to initialize 
init();
