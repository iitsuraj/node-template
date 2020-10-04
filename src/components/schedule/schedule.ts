import mongoose from 'mongoose';

const ScheduleSchema = new mongoose.Schema(
    {
        startdate: {
            type: Date,
            required: true,
        },
        enddate: {
            type: Date,
            required: true,
        },
        daterange: [
            {
                date: { type: Date },
                projects: [{ factory: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' } }],
            },
        ],
        location: { type: mongoose.Schema.Types.ObjectId, required: true },
        teammembers: [{ user: { type: mongoose.Schema.Types.ObjectId } }],
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    },
    { timestamps: true },
);

export default mongoose.model('schedule', ScheduleSchema);
