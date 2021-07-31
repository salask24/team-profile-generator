const Employee = require('./Employee');
//all the fill in areas
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        //for role
        this.role = 'Engineer';

        //for github account
        this.github = github;
    }

//their role
    getRole() {
        return this.role;
    };
//github
    getGithub() {
        return this.github;
    };
}

module.exports = Engineer;