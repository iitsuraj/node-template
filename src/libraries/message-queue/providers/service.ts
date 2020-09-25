/** mixis for message queue providers */

class MessageQueueService {
    async init(): Promise<void> {
        console.error('please implement provider initialization');
    }
    async createConnection(): Promise<void> {
        console.warn('please implement create connection method');
    }
    async createChannel(conn: any): Promise<void> {
        console.warn('please implement create channel method');
    }
    async assertToQueue(channel: any, key: any): Promise<void> {
        console.warn('please implement assert to queue method');
    }
    async sendToQueue(channel: any, key: any, payload: any): Promise<void> {
        console.warn('please implement send to queue method');
    }
    async consumeQueue(channel: any, key: any, callback: any): Promise<void> {
        console.warn('please implement consume queue method');
    }
}

export default MessageQueueService;
