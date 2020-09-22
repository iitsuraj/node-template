import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error('could not find .env file');
}

export default {
    port: parseInt(process.env.PORT, 10),
    databaseURL: process.env.DATABASE,
    jwtSecret: process.env.JWT_SECRET,
    logs: {
        level: process.env.LOG_LEVEL,
    },
    api: {
        prefix: '/api',
    },
};
