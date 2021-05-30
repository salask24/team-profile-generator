const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        super(name, id, email);

        this.internSchool = internSchool;
        this.role = 'Intern';
    }
    getSchool() {
        return this.internSchool;
    }
    getRole() {
        return this.role;
    }
};

module.exports = Intern;