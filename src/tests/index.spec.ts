import chalk from 'chalk';
describe(chalk.cyanBright.bold('sample test'), () => {
    it('can add 2 numbers', () => {
        expect(1 + 2).toBe(3);
    });
});
