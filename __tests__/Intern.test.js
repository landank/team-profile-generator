const Intern = require('../lib/Intern')

describe('class: Intern', () => {
    describe('internTest', () => {
        test('Should return the name of the intern', () => {
            const intern = new Intern('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'UNC-Chapel Hill');
            expect(intern.getName()).toBe('Madeline Ramos');
        });

        test('Should return the id of the intern', () => {
            const intern = new Intern('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'UNC-Chapel Hill');
            expect(intern.getId()).toBe(1);
        });

        test('Should return the email of the intern', () => {
            const intern = new Intern('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'UNC-Chapel Hill');
            expect(intern.getEmail()).toBe('maddieeramos@gmail.com');
        });

        test('Should return the role of the intern', () => {
            const intern = new Intern('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'UNC-Chapel Hill');
            expect(intern.getRole()).toBe('Intern');
        });

        test('Should return the school of the intern', () => {
            const intern = new Intern('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'UNC-Chapel Hill');
            expect(intern.getSchool()).toBe('UNC-Chapel Hill');
        });
    });
});