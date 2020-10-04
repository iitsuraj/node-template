import State from './state';

class stateRepository {
    async get(): Promise<any[]> {
        const data = await State.find().sort({ createdAt: -1 }).exec();
        return data;
    }
    async count(): Promise<number> {
        const data = await State.count({}).exec();
        return data;
    }
    async findById(id: string): Promise<any> {
        const data = await State.findById({ _id: id }).exec();
        return data;
    }
    async create(data: any): Promise<any> {
        const create = await new State(data).save();
        return create;
    }
    async updateById(id: string, update: any): Promise<any | null> {
        const data = await State.findOneAndUpdate({ _id: id }, update, { new: true }).exec();
        return data;
    }
    async delete(id: string): Promise<any> {
        const data = await State.remove({ _id: id }).exec();
        return data;
    }
}

export default stateRepository;
