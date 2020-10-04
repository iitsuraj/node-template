/**
 * Template file for Repository layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

import Project from './project';

class projectRepository {
    async get(): Promise<any[]> {
        const data = await Project.find().sort({ createdAt: -1 }).exec();
        return data;
    }
    async count(): Promise<number> {
        const data = await Project.count({}).exec();
        return data;
    }
    async findById(id: string): Promise<any> {
        const data = await Project.findById({ _id: id }).exec();
        return data;
    }
    async create(data: any): Promise<any> {
        const create = await new Project(data).save();
        return create;
    }
    async updateById(id: string, update: any): Promise<any | null> {
        const data = await Project.findOneAndUpdate({ _id: id }, update, { new: true }).exec();
        return data;
    }
    async delete(id: string): Promise<any> {
        const data = await Project.remove({ _id: id }).exec();
        return data;
    }
}

export default projectRepository;
