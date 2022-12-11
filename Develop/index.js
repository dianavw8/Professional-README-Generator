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
        choices: ['MIT License (https://github.com/babel/babel/blob/master/LICENSE)', 'GNU GPLv3 (https://git.gnome.org/browse/gimp/tree/COPYING)', 'Apache License 2.0 (https://choosealicense.com/licenses/apache-2.0/)'],
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
        message: 'Provide instructions on how to reach me with additional questions via GitHub and email address.',
        name: 'questions',
    },
  ])

