// import fs from 'fs';
import config from 'src/config';

export default {
    env: config.node_env,
    protocol: config.protocol,
    host: config.host,
    port: config.port,

    certificates: {
        // key:
        // cert:
    },
};
