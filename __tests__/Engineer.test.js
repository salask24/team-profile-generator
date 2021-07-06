const Engineer = require('../lib/Engineer');

test('creates an Engineer object that inherits from Employee', () => {
    const engineer = new Engineer('Kimberly Salas', 'salask.0104@gmail.com', 24, 'salask24');

    // if engineer has these attrs, it's inheriting from Employee.
    expect(engineer.name).toBe('Kimberly Salas');
    expect(engineer.email).toBe('salask.0104@gmail.com');
    expect(engineer.id).toBe(24);

    // engineer-specific attr
    expect(engineer.github).toBe('salask24');
})

test('getRole() returns the role', () => {
    const engineer = new Engineer('Kimberly Salas', 'salask.0104@gmail.com', 'blah');
    expect(engineer.getRole()).toBe('Engineer');
})

test('getGithub() returns the github username', () => {
    const engineer = new Engineer('Kimberly Salas', 'salask.0104@gmail.com', 'blah', 'salask24');
    expect(engineer.getGithub()).toBe('salask24');
})