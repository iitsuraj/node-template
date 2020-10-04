import mongoose from 'mongoose';
const factorySchema = new mongoose.Schema(
    {
        name: { type: String, default: 'suraj saini', unique: true },
        factorytype: { type: mongoose.Schema.Types.ObjectId, required: true },
        location: { type: { type: String }, coordinates: [Number] },
        unitcode: {
            type: Number,
        },
        towns: { type: String },
        state: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'State' },
        district: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'District' },
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
 * @typedef factory
 */

// export interface Ifactory {
//     _id: string;
//     name: string;
// }

export default mongoose.model('factory', factorySchema);
