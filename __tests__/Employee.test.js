const Employee = require('../lib/Employee')

describe('class: Employee', () => {
    describe('employeeTest', () => {
        test('Should return the name of the employee', () => {
            const employee = new Employee('Madeline Ramos', 1, 'maddieeramos@gmail.com');
            expect(employee.getName()).toBe('Madeline Ramos');
        });

        test('Should return the id of the employee', () => {
            const employee = new Employee('Madeline Ramos', 1, 'maddieeramos@gmail.com');
            expect(employee.getId()).toBe(1);
        });

        test('Should return the email of the employee', () => {
            const employee = new Employee('Madeline Ramos', 1, 'maddieeramos@gmail.com');
            expect(employee.getEmail()).toBe('maddieeramos@gmail.com');
        });

        test('Should return the role of the employee', () => {
            const employee = new Employee('Madeline Ramos', 1, 'maddieeramos@gmail.com');
            expect(employee.getRole()).toBe('Employee');
        });
    });
});