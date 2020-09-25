import MessageQueueService from './service';
import Amqp from 'amqplib';

class RabbitMQService extends MessageQueueService {
    consumerConnection: unknown;
    publisherConnection: unknown;
    constructor() {
        super();
        this.consumerConnection = undefined;
        this.publisherConnection = undefined;
        this.init(); // async process
    }
    async init(): Promise<void> {
        this.consumerConnection = this.createConnection();
        this.publisherConnection = this.createConnection();
    }
    async createConnection(): Promise<any> {
        return Amqp.connect(process.env.AMQP_URL).catch((e: any): void =>
            console.warn('rabbitMQ init error!', e.message || e),
        );
    }
    async createChannel(conn: any): Promise<void> {
        return conn.createChannel();
    }
    async assertToQueue(channel: any, key: any): Promise<void> {
        return channel.assertQueue(key);
    }
    async sendToQueue(channel: any, key: any, payload: any): Promise<void> {
        channel.sendToQueue(key, payload);
    }
    async consumeQueue(channel: any, key: any, callback: any): Promise<void> {
        channel
            .consume(key, callback, {
                noAck: true,
            })
            .catch((e: any): void => console.warn(e.message || e));
    }
}

export default RabbitMQService;
