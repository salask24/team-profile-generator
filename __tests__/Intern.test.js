const Intern = require('../lib/Intern');

test('Creates an Intern object', () => {
    const intern = new Intern('Intern Name', '20', 'intern@noemail.com', 'internSchool')

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.internSchool).toEqual(expect.any(String));
});

test("Gets Intern's school", () => {
    const intern = new Intern('Intern Name', '24', 'intern@email.com', 'internSchool')

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("Gets Intern's role", () => {
    const intern = new Intern('Intern Name', '24', 'intern@email.com', 'internSchool')

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));

    console.log(intern);
});