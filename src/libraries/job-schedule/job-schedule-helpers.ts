import JobScheduleService from './providers/agenda';

/** helper class for best practice & wrapper implementations */

class ScheduleHelpers {
    service: any;
    constructor() {
        this.service = new JobScheduleService();
        this.service.init(); // async proses
    }

    scheduleRecurringJob(key: any, time: any, callback: any): void {
        this.service.scheduleRecurringJob(key, time, callback).catch(console.warn);
    }

    scheduleSingleJob(key: any, time: any, callback: any): void {
        this.service.scheduleSingleJob(key, time, callback).catch(console.warn);
    }

    removeJob(key: any): void {
        this.service.removeJob(key);
    }

    runSchedule(): void {
        console.log('runSchedule');
    }

    runAllSchedule(): void {
        console.log('runAllSchedule');
    }

    stopSchedule(): void {
        this.service.stop();
    }
}

export default ScheduleHelpers;
