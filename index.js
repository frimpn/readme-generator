const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of the project?' 

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description explaning the what,why, and how of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What did you need to install for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would someone use your project?'

    },
    {
        type: 'input',
        name: 'credits',
        message: 'Did you collabrate with any other users? if so please provide their github profiles'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which licenses did you use',
        choices: ['Apache License', 'GNU General Public License', 'MIT License','BSD 2-Clause','BSD 3-Clause']
    },
    {
        type: 'checkbox',
        name: 'contributing',
        message: 'Would you like other developers to contribute?',
        choices: ['Yes','No']
    },
    {
        type: 'input',
        name: 'test',
        message: 'How would you test the project?'
    },
    {
        type:'input',
        name:'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }



];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err)=>{
     err ? console.log(err) : console.log('successful')
    })
}

// function to initialize program
function init() {
  inquirer.prompt(questions) 
  .then((answers)=>{
  const file = generateMarkdown(answers)
  writeToFile(`README ${answers.title}.md`, file)
  })



}

// function call to initialize program
init();
