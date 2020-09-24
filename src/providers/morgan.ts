import morgan from 'morgan';
import config from 'src/config';
import express from 'express';
class Morgan {
    app: express.Application;
    mode: 'dev' | 'combined';
    constructor(express: express.Application) {
        this.app = express;
        this.mode = config.node_env === 'development' ? 'dev' : 'combined';
    }

    register() {
        this.app.use(morgan(this.mode));
    }
}

export default Morgan;
