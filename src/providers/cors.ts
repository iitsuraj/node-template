import cors from 'cors';
import express from 'express';
class Cors {
    app: express.Application;
    constructor(express: express.Application) {
        this.app = express;
    }
    register() {
        this.app.use(cors());
    }
}
export default Cors;
