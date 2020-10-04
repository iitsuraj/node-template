import mongoose, { Schema } from 'mongoose';
import ErrorHandler from 'src/helpers/error';

/**
 * Stauts: {type: Number, }
 * default: ['Investigation pending' | On Going | Report Submitted | Accepted | Rejected]
 */

const ProjectSchema = new mongoose.Schema(
    {
        factory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Factory',
            required: true,
        },
        date: {
            type: Date,
        },
        report: {
            type: String,
        },
        tasks: [
            {
                title: { type: String },
                data: {
                    images: [{ url: { type: String }, caption: { type: String } }],
                    description: { type: String },
                },
            },
        ],
        status: { type: Number },
    },
    {
        timestamps: true,
    },
);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * @typedef project
 */

// export interface Iproject {
//     _id: string;
//     name: string;
// }

export default mongoose.model('project', ProjectSchema);
