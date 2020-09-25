/**
 * Template file for Controller layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

import Repository from './(qq)-repository';
import transformer from './(qq)-transformer';
import ErrorHandler from 'src/helpers/error';
import express from 'express';
export default {
    async create(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const repo = new Repository();
            const data = await repo.create(req.body);
            return res.json({
                data: transformer.create(data),
            });
        } catch (error) {
            // Logger call
            throw new ErrorHandler(500, `Unknown Error Occured : ${error.message || error} `, 'controller_error');
        }
    },
};
