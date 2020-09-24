// function to generate markdown for README
// create layout for Readme

function generateMarkdown(data) {
  return `# ${data.title}

   ## Description
  ${data.description}
  
  # Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [Contributors](#contributors)
  [Test](#test) 
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.test}
  
  ## Questions
  You can find recent repos at ${data.username}
  If you have any questions contact me at ${data.email}

`;
}

module.exports = generateMarkdown;


