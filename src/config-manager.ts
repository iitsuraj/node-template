import fs from 'fs';
import { join } from 'path';
import _ from 'lodash';

class Config {
    path: string;
    config: any;
    constructor() {
        this.path = join(__dirname, 'config');
        this.config = {};
        this.fetchConfig();
    }

    fetchConfig() {
        fs.readdirSync(this.path).forEach(file => {
            const name = this.getFileName(file);
            if (name) {
                this.config[name] = require(`app/config/${name}`);
            }
        });
    }
    getFileName(file: string): string | null {
        return file.split('.')[0] || null;
    }
    get(path: string, def: string) {
        return _.get(this.config, path, def);
    }
    set(path: string, value: string | number) {
        return _.set(this.config, path, value);
    }
}

export default Config;
