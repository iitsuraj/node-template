/**
 * Template file for Repository layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

import (QQ) from './(qq)';

class (qq)Repository {
    async get(): Promise<any[]> {
        const data = await (QQ).find().sort({ createdAt: -1 }).exec();
        return data;
    }
    async count(): Promise<number> {
        const data = await (QQ).count({}).exec();
        return data;
    }
    async findById(id: string): Promise<any> {
        const data = await (QQ).findById({ _id: id }).exec();
        return data;
    }
    async create(data: any): Promise<any> {
        const create = await new (QQ)(data).save();
        return create;
    }
    async updateById(id: string, update: any): Promise<any | null> {
        const data = await (QQ).findOneAndUpdate({ _id: id }, update, { new: true }).exec();
        return data;
    }
    async delete(id: string): Promise<any> {
        const data = await (QQ).remove({ _id: id }).exec();
        return data;
    }
}

export default (qq)Repository;

