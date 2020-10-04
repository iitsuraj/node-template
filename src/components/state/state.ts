import mongoose, { Schema } from 'mongoose';
// import ErrorHandler from 'src/helpers/error';

const StateSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        short_name: {
            type: String,
            required: true,
            unique: true,
        },
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
 * @typedef state
 */

// export interface Istate {
//     _id: string;
//     name: string;
// }

// export default mongoose.model<Istate & mongoose.Document>('state', stateSchema);

export default mongoose.model('state', StateSchema);
