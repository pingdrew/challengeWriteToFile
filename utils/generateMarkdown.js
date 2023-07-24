const index = require('../index');

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    break;

    case 'Apache_2.0':
      license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    break;
    
    case 'MPL_2.0':
      license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    break;
    
    case 'ISC':
      license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    break;
    default: '';
  }    
  return license;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## DESCRIPTION 
  ${data.description}
  ## TABLE OF CONTENTS
  -- [Installation](#installation)\n
  -- [Usage](#usage)\n
  -- [Contributions](#contributions)\n
  -- [Tests](#tests)\n
  -- [License](#license)\n
  -- [Contacts](#contacts)\n
  ## INSTALLATION
  ${data.installation}
  ## USAGE
  ${data.usage}
  ## CONTRIBUTIONS
  ${data.contributions}
  ## TESTS
  ${data.tests}
  ## LICENSE 
  ${renderLicenseLink(data.license)}
  ## CONTACTS
  ${data.username} ${data.email}
`;
}

module.exports = generateMarkdown;