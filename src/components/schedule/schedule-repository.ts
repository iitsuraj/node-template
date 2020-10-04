import Schedule from './schedule';

class scheduleRepository {
    async get(): Promise<any[]> {
        const data = await Schedule.find().sort({ createdAt: -1 }).exec();
        return data;
    }
    async count(): Promise<number> {
        const data = await Schedule.count({}).exec();
        return data;
    }
    async findById(id: string): Promise<any> {
        const data = await Schedule.findById({ _id: id }).exec();
        return data;
    }
    async create(data: any): Promise<any> {
        const create = await new Schedule(data).save();
        return create;
    }
    async updateById(id: string, update: any): Promise<any | null> {
        const data = await Schedule.findOneAndUpdate({ _id: id }, update, { new: true }).exec();
        return data;
    }
    async delete(id: string): Promise<any> {
        const data = await Schedule.remove({ _id: id }).exec();
        return data;
    }
}

export default scheduleRepository;
