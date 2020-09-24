import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from 'src/config';

export default async (): Promise<void> => {
    const connection = await mongoose
        .connect(config.databaseURL, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
        })
        .catch(console.warn);
    if (connection) {
        console.log('connected');
    }
};
