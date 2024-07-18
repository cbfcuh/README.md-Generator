// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide instructions for the installation of this project: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage of this project: ',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines: ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project: ',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log(`${fileName} generated successfully!`)
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        const adjustedTitle = answers.title.replace(/[^a-z0-9]/, '_').toLowerCase();
        const fileName = `${adjustedTitle}`;
        writeToFile(fileName, markdown);
    });
}

// Function call to initialize app
init();
