import mongoose from 'mongoose';

const DistrictSchema = new mongoose.Schema(
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
        state: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'State',
        },
    },
    {
        timestamps: true,
    },
);

// /**
//  * @typedef district
//  */

// export interface Idistrict {
//     _id: string;
//     name: string;
// }

// export default mongoose.model<Idistrict & mongoose.Document>('district', districtSchema);

export default mongoose.model('district', DistrictSchema);
