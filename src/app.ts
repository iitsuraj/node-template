import https from 'https';
import http from 'http';
import configManager from 'src/config-manager';
import componentManager from 'src/component-manager';
import express from 'express';
import Logger from './logger';

class Application {
    app: express.Application;
    config: any;
    serverConfig: any;
    dbConfig: any;
    serviceProviders: any;
    server: any;
    constructor() {
        this.config = new configManager();
        this.app = express();
        this.serverConfig = this.config.get('server').default;
        this.dbConfig = this.config.get('database').default;
        this.serviceProviders = this.config.get('service-provider').default;
    }

    async setUpDatabase() {
        const db = this.dbConfig;
        await db();
    }

    setUpServer() {
        this.createServer(this.serverConfig.protocol === 'https');
    }
    registerServiceProviders() {
        this.serviceProviders.forEach((ServiceProvider: any) => {
            try {
                const instance = new ServiceProvider(this.app, this.server, this.serverConfig);

                if (typeof instance.register === 'function') {
                    instance.register();
                }
            } catch (err) {
                console.error(err);
            }
        });
    }

    installServiceProviders() {
        this.serviceProviders.forEach((ServiceProvider: any) => {
            try {
                const instance = new ServiceProvider(this.app, this.server, this.serverConfig);

                if (typeof instance.install === 'function') {
                    instance.install();
                }
            } catch (err) {
                console.error(err);
            }
        });
    }

    createServer(secure: boolean) {
        if (secure === true) {
            this.server = https.createServer(this.serverConfig.certificates, this.app);
        } else {
            this.server = http.createServer(this.app);
        }

        // register service provider
        this.registerServiceProviders();

        // register components
        new componentManager(this.app).registerComponents();

        // install service provider
        this.installServiceProviders();

        return this.server;
    }

    getExpress() {
        return this.app;
    }
    getServer() {
        return this.server;
    }

    getRouter() {
        return express.Router();
    }

    run(): void {
        this.setUpDatabase();
        this.setUpServer();

        this.server.listen(this.serverConfig.port);
        Logger.info('server listening on port :' + this.serverConfig.port);
    }
}

export default new Application();
