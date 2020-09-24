import fs from 'fs';
import path from 'path';
import express from 'express';

class ComponentManager {
    app: express.Application;
    pathDir: string;
    path: string;
    disabledComponents: Array<string>;
    constructor(express: express.Application) {
        this.app = express;
        if (process.env.PWD) {
            this.pathDir = process.env.PWD;
        } else {
            this.pathDir = '/home/app-name/src';
        }
        this.path = path.join(this.pathDir, 'components');

        this.disabledComponents = [];
    }

    registerComponents(): void {
        fs.readdirSync(this.path).forEach(dir => {
            this.registerComponent(dir);
            this.registerModels(path.join(this.path, dir), dir);
        });
    }

    registerComponent(name: string): void {
        if (this.isValidComponent(name)) {
            this.app.use(`/${process.env.API_PREFIX}/` + name, require('components/' + name + '/' + name + '-api'));
        } else {
            console.error(path.join(this.path, name) + ' is not valid or may be disabled');
        }
    }

    registerModels(dir: string, name: string): void {
        fs.readdirSync(dir).forEach(file => {
            const classFile = path.join(name, path.basename(file));
            require('components/' + classFile);
        });
    }

    isValidComponent(name: string): boolean {
        const files = fs.readdirSync(path.join(this.path, name));
        const hasFile = files.includes(name + '-api.js');
        const notDisabled = !this.disabledComponents.includes(name);

        return hasFile && notDisabled;
    }
}
export default ComponentManager;
