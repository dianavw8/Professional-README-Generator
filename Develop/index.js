const inquirer = require('inquirer')
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a detailed description explaining the what, why, and how of your project.',
      name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Select a License option from the below list:',
        name: 'license',
        choices: ['MIT License link: https://github.com/babel/babel/blob/master/LICENSE', 'GNU GPLv3 link: https://git.gnome.org/browse/gimp/tree/COPYING', 'Apache License 2.0 link: https://choosealicense.com/licenses/apache-2.0/'],
    },
    {
        type: 'input',
        message: 'List contributors that contributed to your project.',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Provide tests for your application and provide examples on how to run them.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'gitHubUrl',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
  ])
  .then((response) =>
    convertToReadme(response.title, response.description, response.install, response.usage, response.license, response.contributors,
        response.tests, response.gitHubUrl, response.email)
  );


  function convertToReadme (title, description, install, usage, license, contributors, tests, gitHubUrl, email) {
    
    
    let ReadmeTemplate = `
    # ${title}
    
    ## Description

    ${description}

    ## Table of Contents

    If your README is long, add a table of contents to make it easy for users to find what they need.

    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation

    ${install}

    ## Usage

    ${usage}


    ## License

    ${license}


    ## Contributing

    ${contributors}

    ## Tests

    ${tests}
    
    ## Questions
    
    To reach me with additional questions feel free to contact me via GitHub at ${gitHubUrl} or email me at ${email}

` 

    fs.writeFile('readme.md', ReadmeTemplate, function(err, result) {
        if(err) console.log('error', err);
        console.log('File Written!')
      });

    }

