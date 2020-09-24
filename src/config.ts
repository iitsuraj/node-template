import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error('could not find .env file');
}

const port: string = process.env.PORT ? process.env.PORT : '3000';
const databaseURL: string = process.env.DATABASE ? process.env.DATABASE : 'local';
const config = {
    port: parseInt(port, 10),
    node_env: 'development',
    protocol: 'http',
    host: '0.0.0.0',
    databaseURL: databaseURL,
    jwtSecret: process.env.JWT_SECRET,
    logs: {
        level: process.env.LOG_LEVEL,
    },
    api: {
        prefix: '/api',
    },
};

export default config;
