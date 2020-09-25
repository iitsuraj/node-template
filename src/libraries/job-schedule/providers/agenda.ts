import JobScheduleService from './service';
import Agenda from 'agenda';
import config from 'src/config';
class AgendaService extends JobScheduleService {
    collection: string;
    connectionString: string;
    agenda: any;
    constructor() {
        super();
        this.collection = 'agenda_jobs';
        this.connectionString = config.databaseURL;
        this.agenda = undefined;
    }

    async init(): Promise<void> {
        this.agenda = new Agenda();
        this.agenda.database(this.connectionString, this.collection, {
            authSource: 'admin',
            useNewUrlParser: true,
        });
        await this.start();
    }

    async start(): Promise<any> {
        return this.agenda.start().catch((e: any): void => console.warn('agendaJs init error!', e.message || e));
    }

    async scheduleRecurringJob(key: any, time: any, callback: any): Promise<void> {
        this.agenda.on('ready', async () => {
            this.agenda.define(key, callback);
            await this.agenda.every(time, key);
        });
    }

    async scheduleSingleJob(key: any, time: any, callback: any): Promise<void> {
        this.agenda.on('ready', async () => {
            this.agenda.define(key, callback);
            await this.agenda.create(time, key);
        });
    }

    async removeJob(key: any): Promise<void> {
        this.agenda.on('ready', () => {
            this.agenda.cancel(
                {
                    name: key,
                },
                (err: any, numRemoved: any): void => {
                    console.log(err, numRemoved);
                },
            );
        });
    }

    async stop(): Promise<void> {
        this.agenda.on('ready', async () => {
            await this.agenda.stop();
        });
    }
}

export default AgendaService;
