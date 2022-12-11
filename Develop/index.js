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
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Select a License option from the below list:',
        name: 'license',
        choices: ['MIT License', 'GNU GPLv3', 'Apache License 2.0'],
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
    if (license === 'MIT License') {
      badge = '![MIT License](https://img.shields.io/static/v1?label=license&message=MIT&color=green)';
      license = 'MIT License link: https://github.com/babel/babel/blob/master/LICENSE';
      notice = `
      Copyright 2022 ${gitHubUrl}

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      `
    }
    if (license === 'GNU GPLv3') {
      badge = '![GNU GPLv3](https://img.shields.io/static/v1?label=license&message=GNU GPLv3&color=green)';
      license = 'GNU GPLv3 link: https://git.gnome.org/browse/gimp/tree/COPYING';
      notice =`
      Copyright (C) 2022  ${gitHubUrl}

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
      `
    }
    if (license === 'Apache License 2.0') {
      badge = '![Apache License 2.0](https://img.shields.io/static/v1?label=license&message=Apache+2.0&color=green)';
      license = 'Apache License 2.0 link: https://choosealicense.com/licenses/apache-2.0/';
      notice =`
      Copyright 2022 ${gitHubUrl}

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
        http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
      `
    }

    let ReadmeTemplate = `
# ${title}

${badge}

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
${notice}

## Contributing

${contributors}

## Tests

${tests}

## Questions

Take a look at my other work on GitHub at ${gitHubUrl}, or if you have additional questions feel free to email me at ${email}.
`;
    

    fs.writeFile('README.md', ReadmeTemplate, function(err, result) {
        if(err) console.log('error', err);
        console.log('File Written!')
      });

  }

