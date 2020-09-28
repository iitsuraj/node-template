/**
 * Template file for Transformer functions
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

export default {
    create(data: Array<any>): Array<any> {
        const output: any[] = [];
        data.forEach(dt => {
            output.push(dt);
        });
        return output;
    },
};
