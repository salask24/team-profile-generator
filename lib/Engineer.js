const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, role) {
        super(name, id, email, role);

        this.gitHubUsername = gitHubUsername;
        this.employeeRole = 'Engineer';
    }
    getGitHub() {
        return this.gitHubUsername;
    }
    getRole() {
        return this.employeeRole;
    }
};

module.exports = Engineer;