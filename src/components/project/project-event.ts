/**
 * Template file for Event layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

// import MessageQueueHelpers from 'src/libraries/message-queue';
import JobScheduleHelpers from 'src/libraries/job-schedule';

const key = 'project-event';
// const messageQueue = new MessageQueueHelpers();
const jobSchedule = new JobScheduleHelpers();

// messageQueue.publishMessage(key, 'default message queue event for project');

jobSchedule.scheduleRecurringJob('project job-schedule definition', '1 minute', function () {
    console.warn('please implement project job-schedule here', new Date());
});

// messageQueue.consumeMessage(key, messageCallback);

function messageCallback(msg: any): void {
    console.log(' [x] Received %s', msg.content.toString());
}
