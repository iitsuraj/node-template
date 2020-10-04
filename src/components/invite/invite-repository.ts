/**
 * Template file for Repository layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

import invite from './invite';

class inviteRepository {
    async get(): Promise<any[]> {
        const data = await invite.find().sort({ createdAt: -1 }).exec();
        return data;
    }
    async count(): Promise<number> {
        const data = await invite.count({}).exec();
        return data;
    }
    async findById(id: string): Promise<any> {
        const data = await invite.findById({ _id: id }).exec();
        return data;
    }
    async create(data: any): Promise<any> {
        const create = await new invite(data).save();
        return create;
    }
    async updateById(id: string, update: any): Promise<any | null> {
        const data = await invite.findOneAndUpdate({ _id: id }, update, { new: true }).exec();
        return data;
    }
    async delete(id: string): Promise<any> {
        const data = await invite.remove({ _id: id }).exec();
        return data;
    }
}

export default inviteRepository;

