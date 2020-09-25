/** mixins for job schedule provider */

class JobScheduleService {
    async init(): Promise<void> {
        console.error('please implement provider initialization');
    }
    async start(): Promise<void> {
        console.warn('please implement provider starting event');
    }
    async scheduleRecurringJob(key: any, time: any, callback: any): Promise<void> {
        console.warn('please implement schedule recurring method');
    }
    async scheduleSingleJob(key: any, time: any, callback: any): Promise<void> {
        console.warn('please implement schedule single job method');
    }
    async removeJob(key: any): Promise<void> {
        console.warn('please implement remove job method');
    }
    async stop(): Promise<void> {
        console.warn('please implement provider stop event');
    }
}

export default JobScheduleService;
