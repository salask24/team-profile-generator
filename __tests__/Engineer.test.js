const Engineer = require('../lib/Engineer');

test('Creates an Engineer object', () => {
    const engineer = new Engineer('kim', '24', 'e@email.com', 'GithubUsername')

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.githubUsername).toEqual(expect.any(String));
});

test("Gets Engineer's GitHub username", () => {
    const engineer = new Engineer('kim', '24', 'e@email.com', 'githubUsername')

    expect(engineer.githubUsername()).toEqual(expect.any(String));
});

test("Gets Engineer's role", () => {
    const engineer = new Engineer('kim', '24', 'e@email.com', 'githubUsername')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));

    console.log(engineer);
});