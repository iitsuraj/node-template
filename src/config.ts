import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
    // This error should crash whole process

    throw new Error("⚠️  Couldn't find .env file  ⚠️");
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
    /**
     * Used by winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    api: {
        prefix: '/api',
    },
};

export default config;
