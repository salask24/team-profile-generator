const Manager = require('../lib/Manager');

test('Creates a Manager object', () => {
    const manager = new Manager('Manager', '10', 'manager@noemail.com', 'Room300')

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.any(String));
});

test("Gets Manager's office number", () => {
    const manager = new Manager('Manager', '10', 'manager@noemail.com', 'Room300')

    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});

test("Gets Manager's role", () => {
    const manager = new Manager('Manager', '10', 'manager@noemail.com', 'Room300')

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));

    console.log(manager);
});
