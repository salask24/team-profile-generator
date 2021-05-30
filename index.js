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

    //questions for adding manager information
    const addManager = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'manager',
                validate: answerInput => {
                    if(answerInput){
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
                message: "Please enter the manager's ID.",
                validate: nameInput => {
                    if  (isNaN(nameInput)) {
                        console.log ("Please enter the manager's ID!")
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
                    if(answerInput){
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
                    if  (isNaN(nameInput)) {
                        console.log ('Please enter an office number!')
                        return false; 
                    } else {
                        return true;
                    }
                }
            }
        ])
        .then(managerInput => {
            const  { name, id, email, officeNumber } = managerInput; 
            const manager = new Manager (name, id, email, officeNumber);
    
            teamArray.push(manager); 
            console.log(manager); 
        })
    };



}



// this is where the questions will go
//manager
    //Name
    //employee ID 
    //email address
    //office number

//engineer
    //Name
    //ID
    //email
    //GitHub username
    //back to the menu


//intern
    //Name
    //ID
    //email 
    //School
    //back to the menu

//exit the app and the HTML is generated