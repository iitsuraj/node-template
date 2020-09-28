import Repository from './state-repository';
import transformer from './state-transformer';
import ErrorHandler from 'src/helpers/error';
import { Request, Response } from 'express';
import { update } from 'lodash';

export default {
    async get(req: Request, res: Response): Promise<any> {
        try {
            const repo = new Repository();
            const data = await repo.get();
            return res.json({ data: data });
        } catch (error) {
            throw new ErrorHandler(
                500,
                `Unknown Error Occured : ${error.message || error} `,
                'controller_error',
                error,
            );
        }
    },
    async create(req: Request, res: Response): Promise<any> {
        try {
            const repo = new Repository();
            const data = await repo.create(req.body);
            // want to update data
            // return res.json({
            //     data: transformer.create(data),
            // });
            // without update data
            return res.json({
                data: data,
            });
        } catch (error) {
            throw new ErrorHandler(
                500,
                `Unknown Error Occured : ${error.message || error} `,
                'controller_error',
                error,
            );
        }
    },
    async update(req: Request, res: Response): Promise<any> {
        try {
            const repo = new Repository();
            // Arrange data then send for update
            const id = 'Id';
            const update = { name: 'suraj' };
            const data = await repo.updateById(id, update);
            return res.json({ data: data });
        } catch (error) {
            throw new ErrorHandler(
                500,
                `Unknown Error Occured : ${error.message || error} `,
                'controller_error',
                error,
            );
        }
    },
};
