// import MessageQueueService from './providers/rabbitmq';
// /** helper class for best practice & wrapper implementations */

// class MessageQueueHelpers {
//     service: any;
//     publisherChannel: any;
//     constructor() {
//         this.service = new MessageQueueService();
//         this.publisherChannel = undefined;
//     }

//     async publishMessage(key: any, message: any): Promise<void> {
//         const channel = await this.getPublisherChannel();
//         await this.service.assertToQueue(channel, key);
//         this.service.sendToQueue(channel, key, Buffer.from(message));
//     }

//     async consumeMessage(key: any, callback: any): Promise<void> {
//         const channel = await this.getConsumerChannel().catch(e => console.warn(e.message || e));
//         await this.service.assertToQueue(channel, key);
//         this.service.consumeQueue(channel, key, callback);
//     }

//     async getPublisherChannel(): Promise<any> {
//         if (this.publisherChannel === undefined) {
//             this.publisherChannel = await this.createPublisherChannel().catch(e => console.warn(e.message || e));
//         }
//         return this.publisherChannel;
//     }

//     /** return promise */
//     async createPublisherChannel(): Promise<any> {
//         if (this.service.publisherConnection.then !== undefined) {
//             // still a promise
//             this.service.publisherConnection = await this.service.publisherConnection;
//         }
//         return this.service
//             .createChannel(this.service.publisherConnection)
//             .catch((e: any): void => console.warn(e.message || e));
//     }

//     /** return promise */
//     async getConsumerChannel(): Promise<any> {
//         if (this.service.consumerConnection.then !== undefined) {
//             // still a promise
//             this.service.consumerConnection = await this.service.consumerConnection;
//         }
//         return this.service
//             .createChannel(this.service.consumerConnection)
//             .catch((e: any): void => console.warn(e.message || e));
//     }

//     // TODO : when to close channel & connection?
// }

// export default MessageQueueHelpers;
