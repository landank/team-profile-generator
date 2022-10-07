const { generateManagerCard, generateEngineersCard, generateInternsCard } = require('./dist/page-templates/cards');
const generateHtml = require('./dist/page-templates/html');
const inquirer = require('inquirer');
inquirer.registerPrompt('loop', require('inquirer-loop')(inquirer));
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
function init() {
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?",
      },

      {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee ID number?",
      },

      {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
      },

      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
      },

      {
        type: 'loop',
        name: 'team',
        message: 'Add another team member?',
        questions: [
            {
                type: 'list',
                name: 'employeeType',
                choices: ['Engineer', 'Intern']
            },

            {
                type: 'input',
                name: 'employeeId',
                message: 'What is the employees ID?',
            },

            {
                type: 'input',
                name: 'employeeName',
                message: 'What is the employees name?',

            },

            {
                type: 'input',
                name: 'employeeEmail',
                message: 'What is the employees email address?',
            },

            {
                type: 'input',
                name: 'githubUsername',
                message: 'What is the employees GitHub username?',
                when: (teamMember) => teamMember.employeeType === 'Engineer'
            },

            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the name of the employees school?',
                when: (teamMember) => teamMember.employeeType === 'Intern'
            },
        ],
      }
    ])
    .then(projectData => {
        var manager = new Manager(projectData.managerName, projectData.id, projectData.email, projectData.officeNumber);
        var engineers = [];
        var interns = [];

        projectData.team.forEach(function(e) {
            if (e.employeeType === 'Engineer') {
                const engineer = new Engineer(e.employeeName, e.employeeId, e.employeeEmail, e.githubUsername);
                engineers.push(engineer);
            } else if (e.employeeType === 'Intern') {
                const intern = new Intern(e.employeeName, e.employeeId, e.employeeEmail, e.internSchool);
                interns.push(intern);
            }
        });

        var managerCard = generateManagerCard(manager);
        var engineersCard = generateEngineersCard(engineers);
        var internsCard = generateInternsCard(interns);
        var html = generateHtml(managerCard, engineersCard, internsCard);

        writeToFile(html);
    })
}

function writeToFile(html) {
    fs.writeFile('index.html', html, function (err) {
        if (err) throw err;
        console.log('Generating Team Members...');
    });
}

init();
