// function to generate markdown for README
// create layout for Readme

function generateMarkdown(data) {
  return `# ${data.title}

   ## Description
  ${data.description}
  
  # Table of Contents
  [Description](#description)\n
  [Installation](#installation)\n
  [Usage](#usage)\n
  [Contributors](#contributors)\n
  [Test](#test) \n
  
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


