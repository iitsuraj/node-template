import District from './district';

class districtRepository {
    async get(): Promise<any[]> {
        const data = await District.find().sort({ createdAt: -1 }).exec();
        return data;
    }
    async count(): Promise<number> {
        const data = await District.count({}).exec();
        return data;
    }
    async findById(id: string): Promise<any> {
        const data = await District.findById({ _id: id }).exec();
        return data;
    }
    async create(data: any): Promise<any> {
        const create = await new District(data).save();
        return create;
    }
    async updateById(id: string, update: any): Promise<any | null> {
        const data = await District.findOneAndUpdate({ _id: id }, update, { new: true }).exec();
        return data;
    }
    async delete(id: string): Promise<any> {
        const data = await District.remove({ _id: id }).exec();
        return data;
    }
}

export default districtRepository;
