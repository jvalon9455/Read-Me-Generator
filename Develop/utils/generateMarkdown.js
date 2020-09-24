// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  # Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  
  
`;
}

module.exports = generateMarkdown;
