/**
 * Template file for Event layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */

// import MessageQueueHelpers from 'src/libraries/message-queue';
import JobScheduleHelpers from 'src/libraries/job-schedule';

const key = 'invite-event';
// const messageQueue = new MessageQueueHelpers();
const jobSchedule = new JobScheduleHelpers();

// messageQueue.publishMessage(key, 'default message queue event for invite');

jobSchedule.scheduleRecurringJob('invite job-schedule definition', '1 minute', function () {
    console.warn('please implement invite job-schedule here', new Date());
});

// messageQueue.consumeMessage(key, messageCallback);

function messageCallback(msg: any): void {
    console.log(' [x] Received %s', msg.content.toString());
}
