// function to generate markdown for README
// create layout for Readme

function generateMarkdown(data) {
  return `# ${data.title}
  ![](https://img.shields.io/static/v1?label=${data.badges}&message=GT-FT&color=critical)


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
  This project is licensed by ${data.badges}\n
  ![](https://img.shields.io/static/v1?label=${data.badges}&message=GT-FT&color=critical)
  

  ## Contributions
  ${data.contributions}\n
  If you would like to help contribute to this project, please reach out to me at (https://github.com/${data.username}).

  ## Tests
  ${data.test}
  
  ## Questions
  If you have any questions contact me at ${data.email}

`;
}



module.exports = generateMarkdown;


