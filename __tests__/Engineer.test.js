const Engineer = require('../lib/Engineer')

describe('class: Engineer', () => {
    describe('engineerTest', () => {
        test('Should return the name of the engineer', () => {
            const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
            expect(engineer.getName()).toBe('Madeline Ramos');
        });

        test('Should return the id of the engineer', () => {
            const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
            expect(engineer.getId()).toBe(1);
        });

        test('Should return the email of the engineer', () => {
            const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
            expect(engineer.getEmail()).toBe('maddieeramos@gmail.com');
        });

        test('Should return the role of the engineer', () => {
            const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
            expect(engineer.getRole()).toBe('Engineer');
        });

        test('Should return the github of the engineer', () => {
            const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
            expect(engineer.getGithub()).toBe('MadelineRamos');
        });
    });
});