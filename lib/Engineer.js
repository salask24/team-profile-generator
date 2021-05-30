const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role) {
        super(name, id, email, role);

        this.githubUsername = githubUsername;
        this.role = 'Engineer';
    }
    getGitHub() {
        return this.githubUsername;
    }
    getRole() {
        return this.role;
    }
};

module.exports = Engineer;