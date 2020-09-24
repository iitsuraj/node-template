import bp from 'body-parser';
import express from 'express';
class BodyParser {
    app: express.Application;
    constructor(express: express.Application) {
        this.app = express;
    }
    register() {
        this.app.use(bp.json());
        this.app.use(bp.urlencoded({ extended: true }));
    }
}
export default BodyParser;
