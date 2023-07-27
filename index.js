// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

function questions() {
  inquirer.prompt([
    //asks for the title of readme
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    // asks for the description of readme
    {
      type: 'input',
      message: 'What do you want the description to be?',
      name: 'description',
    },
    // asks for the installation
    {
      type: 'input',
      message: 'What do you want the installation section to say?',
      name: 'installation',
    },
    // asks what you want for usage
    {
      type: 'input',
      message: 'What do you want the usage section to say?',
      name: 'usage',
    },
    // asks what you want to put in the contributions section
    {
      type: 'input',
      message: 'What do you want the contributions section to say?',
      name: 'contributions',
    },
    // what do you put in the test section
    {
      type: 'input',
      message: 'What about the tests section?',
      name: 'tests',
    },
    // a list is presented of available licenses to choose from
    {
      type: 'rawlist',
      message: 'What license would you like?',
      name: 'license',
      choices: ['MIT', 'Apache_2.0', 'MPL_2.0', 'ISC'],
    },
    // asks for github username
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    // asks for email for contacts
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  //then it takes the response, and calls another function that takes in the variable generated from a seperate function taking the response
    .then((response) =>
      writeToFile(generateMarkdown(response))
    );
};

// TODO: Create a function to write README file
function writeToFile(dataFormatted) {
  // WHEN I click on the links in the Table of Contents
  // THEN I am taken to the corresponding section of the README
  fs.writeFile('README2.md', `${dataFormatted}\n`, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  );
};


// this function runs on launch and just runs another function
function init() {
  questions();
};

// Function call to initialize app
init();
