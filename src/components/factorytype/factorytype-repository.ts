import FactoryType from './factorytype';

class FactoryTypeRepository {
    async get(): Promise<any[]> {
        const data = await FactoryType.find().sort({ createdAt: -1 }).exec();
        return data;
    }
    async count(): Promise<number> {
        const data = await FactoryType.count({}).exec();
        return data;
    }
    async findById(id: string): Promise<any> {
        const data = await FactoryType.findById({ _id: id }).exec();
        return data;
    }
    async create(data: any): Promise<any> {
        const create = await new FactoryType(data).save();
        return create;
    }
    async updateById(id: string, update: any): Promise<any | null> {
        const data = await FactoryType.findOneAndUpdate({ _id: id }, update, { new: true }).exec();
        return data;
    }
    async delete(id: string): Promise<any> {
        const data = await FactoryType.remove({ _id: id }).exec();
        return data;
    }
}

export default FactoryTypeRepository;
