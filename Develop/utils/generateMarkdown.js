// function to generate markdown for README
// create layout for Readme

function generateMarkdown(data) {
  return `# ${data.title}
  ![](https://img.shields.io/static/v1?label=${data.badges}&message=${data.username}&color=critical)


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
  This project is licensed by, ${data.badges}
  

  ## Contributions
  ${data.contributions}
  If you would like to help contribute to this project, please reach out to me at (https://github.com/${data.username}).

  ## Tests
  ${data.test}
  
  ## Questions
  If you have any questions contact me at ${data.email}

`;
}

// make a function to grab users choice of license/badge
// function badges (userInput) {
//   if (userInput.license == "MIT") {
//     return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
//   } else if (userInput.license == "Apache") {
//     return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
//   }else if (userInput.license == "Mozilla") {
//     return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
//   } else {
//     console.log("Unknown License");
//   }
// }


module.exports = generateMarkdown;


