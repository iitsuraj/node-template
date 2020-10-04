import User from './user';

class userRepository {
    async get(): Promise<any[]> {
        const data = await User.find().sort({ createdAt: -1 }).exec();
        return data;
    }
    async count(): Promise<number> {
        const data = await User.count({}).exec();
        return data;
    }
    async findById(id: string): Promise<any> {
        const data = await User.findById({ _id: id }).exec();
        return data;
    }
    async create(data: any): Promise<any> {
        const create = await new User(data).save();
        return create;
    }
    async updateById(id: string, update: any): Promise<any | null> {
        const data = await User.findOneAndUpdate({ _id: id }, update, { new: true }).exec();
        return data;
    }
    async delete(id: string): Promise<any> {
        const data = await User.remove({ _id: id }).exec();
        return data;
    }
}

export default userRepository;
