import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from 'src/config';
import ErrorHandler from 'src/helpers/error';
export default async (): Promise<void> => {
    const connection = await mongoose
        .connect(config.databaseURL, {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true,
        })
        .catch((err: any): void => {
            throw new ErrorHandler(500, 'mongoose connection error', 'database_connection_error', err);
        });
    if (connection) {
        console.log('connected');
    }
};
