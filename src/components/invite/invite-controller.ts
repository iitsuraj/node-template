/**
 * Template file for Controller layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

import Repository from './invite-repository';
import transformer from './invite-transformer';
import ErrorHandler from 'src/helpers/error';
import { Request, Response } from 'express';
import { update } from 'lodash';
import { count } from 'console';

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
    async count(req: Request, res: Response): Promise<any> {
        try {
            const repo = new Repository();
            const data = await repo.count();
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
    async findOne(req: Request, res: Response): Promise<any> {
        try {
            const id = req.params.id;
            const repo = new Repository();
            const data = await repo.findById(id);
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
            const id = req.params.id;
            const update = req.body;
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
    async delete(req: Request, res: Response): Promise<any> {
        try {
            const id = req.params.id;
            const repo = new Repository();
            const data = repo.delete(id);
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
