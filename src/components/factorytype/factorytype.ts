import mongoose from 'mongoose';

const FactoryTypeSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
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
 * @typedef factorytype
 */

// export interface Ifactorytype {
//     _id: string;
//     name: string;
// }

// export default mongoose.model<Ifactorytype & mongoose.Document>('factorytype', factoryTypeSchema);

export default mongoose.model('factorytype', FactoryTypeSchema);
