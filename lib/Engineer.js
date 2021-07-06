const Employee = require('./Employee');
//all the fill in areas
class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;
    }
//their role
    getRole() {
        return 'Engineer';
    }
//github
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;