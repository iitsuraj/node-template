import Factory from './factory';

class districtRepository {
    async get(): Promise<any[]> {
        const data = await Factory.find().sort({ createdAt: -1 }).exec();
        return data;
    }
    async count(): Promise<number> {
        const data = await Factory.count({}).exec();
        return data;
    }
    async findById(id: string): Promise<any> {
        const data = await Factory.findById({ _id: id }).exec();
        return data;
    }
    async create(data: any): Promise<any> {
        const create = await new Factory(data).save();
        return create;
    }
    async updateById(id: string, update: any): Promise<any | null> {
        const data = await Factory.findOneAndUpdate({ _id: id }, update, { new: true }).exec();
        return data;
    }
    async delete(id: string): Promise<any> {
        const data = await Factory.remove({ _id: id }).exec();
        return data;
    }
}

export default districtRepository;
