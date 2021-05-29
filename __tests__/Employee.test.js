const Employee = require('../lib/Employee')

// constructive pieces

test('check to see if class is an object', () => {
    const employee = new Employee ('kim')

    expect(typeof employee).toBe('object')
});

test('check for name', () => {
    const name = new Employee ('kim')

    expect(name.name).toBe('kim')
});

test('check for id', () => {
    const id = new Employee ('kim', 24)

    expect(id.id).toBe(24)

});

test('check for email', () => {
    const email = new Employee ('kim', 24, 'e@email.com')

    expect(email.email).toBe('e@email.com')

});


