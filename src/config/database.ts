import config from './index';
export default {
    async connect() {
        let client = await MongoClient.connect(config.databaseURL, {
            authSource: 'admin',
        }).catch((err: any): void => console.warn(err));
    },
};
