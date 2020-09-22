import { addPath } from 'app-module-path';
addPath(__dirname);
import http from 'http';
import https from 'https';
import configManager from 'config-manager';
// import componentManager from 'component-manager';
import config from 'config';
import express from 'express';
// import Logger from 'loaders/logger';

interface Iconfig {
    port: number;
    databaseURL: string;
    jwtSecret: string;
    logs: Ilogs;
    api: Iapi;
}

interface Ilogs {
    level: string;
}

interface Iapi {
    prefix: string;
}

class Application {
    config: Iconfig;
    app: express.Application;
    constructor() {
        this.config = config;
        this.app = express();
    }
    getConfig(): Iconfig {
        return this.config;
    }
}
