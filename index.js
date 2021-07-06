// add all the const
const fs = require('fs');

const inquirer = require('inquirer');

const Manager = require('./lib/Manager');

const Engineer = require('./lib/Engineer');

const Intern = require('./lib/Intern');

const generatePage = require('./src/page-template');

const { writeFile, copyFile } = require('./util/generate-site');

const teamMembers = [];

//start the application
const startApp = () => {
console.log('running')
    //questions for adding manager information
    const addManager = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'manager',
                message: 'Please enter your team managers name.',
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter your team managers name.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the manager's ID:",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log("Please enter the manager's ID!")
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the manager's email.",
                validate: answerInput => {
                    if (answerInput) {
                        return true;
                    } else {
                        console.log('Please enter your managers email.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please enter the manager's office number",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log('Please enter an office number!')
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        ])
            .then(managerInput => {
                const { name, id, email, officeNumber } = managerInput;
                const manager = new Manager(name, id, email, officeNumber);

                teamMembers.push(manager);
                console.log(manager);
            })
    };


    const addEmployee = () => {
        console.log(`
        =================
        Adding employees to the team
        =================
        `);

        return inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: "Please choose your employee's role",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: "What's the name of the employee?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter an employee's name!");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the employee's ID.",
                validate: nameInput => {
                    if (isNaN(nameInput)) {
                        console.log("Please enter the employee's ID!")
                        return false;
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the employee's email.",
                validate: email => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                    if (valid) {
                        return true;
                    } else {
                        console.log('Please enter an email!')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the employee's github username.",
                when: (input) => input.role === "Engineer",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the employee's github username!")
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the intern's school",
                when: (input) => input.role === "Intern",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's school!")
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add more team members?',
                default: false
            }
        ])
            .then(employeeData => {
                // data for employee types 

                let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
                let employee;

                if (role === "Engineer") {
                    employee = new Engineer(name, id, email, github);

                    console.log(employee);

                } else if (role === "Intern") {
                    employee = new Intern(name, id, email, school);

                    console.log(employee);
                }

                teamMembers.push(employee);

                if (confirmAddEmployee) {
                    return addEmployee(teamMembers);
                } else {
                    return teamMembers;
                }
            })

    };


    //this is the function that will generate HTML page file using the file system
    const writeFile = data => {
        fs.writeFile('./dist/index.html', data, err => {
            // if there is an error it will console log the error
            if (err) {
                console.log(err);
                return;
                // if no error
            } else {
                console.log("Your team profile has been successfully created! Please check out the index.html")
            }
        })
    };

    addManager()
        .then(addEmployee)
        .then(teamMembers => {
            return generateHTML(teamMembers);
        })
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        .catch(err => {
            console.log(err);
        });

}

startApp()
