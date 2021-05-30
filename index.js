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
                type: '',
                name: '',
                validate: answerInput => {
                    if(answerInput){
                        return true;
                    } else {
                        console.log('Please enter your team managers name.');
                        return false;
                    }
                }
            }
        ]
        )}


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