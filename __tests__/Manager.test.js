const Manager = require('../lib/Manager')

describe('class: Manager', () => {
    describe('managerTest', () => {
        test('Should return the name of the manager', () => {
            const manager = new Manager('Madeline Ramos', 1, 'maddieeramos@gmail.com', 1);
            expect(manager.getName()).toBe('Madeline Ramos');
        });

        test('Should return the id of the manager', () => {
            const manager = new Manager('Madeline Ramos', 1, 'maddieeramos@gmail.com', 1);
            expect(manager.getId()).toBe(1);
        });

        test('Should return the email of the manager', () => {
            const manager = new Manager('Madeline Ramos', 1, 'maddieeramos@gmail.com', 1);
            expect(manager.getEmail()).toBe('maddieeramos@gmail.com');
        });

        test('Should return the role of the manager', () => {
            const manager = new Manager('Madeline Ramos', 1, 'maddieeramos@gmail.com', 1);
            expect(manager.getRole()).toBe('Manager');
        });
    });
});