// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
function questions() {
  // WHEN I enter my project title
  // THEN this is displayed as the title of the README
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    {
      type: 'input',
      message: 'What do you want the description to be?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What do you want the installation section to say?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What do you want the usage section to say?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What do you want the contributions section to say?',
      name: 'contributions',
    },
    {
      type: 'input',
      message: 'What about the tests section?',
      name: 'tests',
    },
    // WHEN I choose a license for my application from a list of options
    // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
    {
      type: 'rawlist',
      message: 'What license would you like?',
      name: 'license',
      choices: ['MIT', 'Apache_2.0', 'MPL_2.0', 'ISC'],
    },
    // WHEN I enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    // WHEN I enter my email address
    // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
    .then((response) =>
      writeToFile(generateMarkdown(response))
    );
};

// TODO: Create a function to write README file
function writeToFile(dataFormatted) {
  // WHEN I click on the links in the Table of Contents
  // THEN I am taken to the corresponding section of the README
  fs.appendFile('README.md', `${dataFormatted}\n`, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  );
};


// TODO: Create a function to initialize app
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function init() {
  questions();
};

// Function call to initialize app
init();
