import State, { Istate } from './state';
class stateRepository {
    async get(): Promise<Istate[]> {
        const data = await State.find().sort({ createdAt: -1 }).exec();
        return data;
    }
    async create(data: any): Promise<Istate> {
        // const create = await new State(data).save();
        return { _id: '_id', name: 'string' };
    }
    async updateById(id: string, update: any): Promise<Istate | null> {
        const data = await State.findOneAndUpdate({ _id: id }, update, { new: true }).exec();
        return data;
    }
    // async delete(id: string): Promise<Istate | null> {
    //   const data = await
    // }
}

export default stateRepository;
