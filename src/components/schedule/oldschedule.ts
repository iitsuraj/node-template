// import mongoose from 'mongoose';

// /**
//  * Stauts: {type: Number, }
//  * default: ['Investigation pending' | On Going | Report Submitted | Accepted | Rejected]
//  */

// const ScheduleSchema = new mongoose.Schema(
//     {
//         date: {
//             type: Date,
//             required: true,
//         },
//         district: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true },
//         factories: [
//             {
//                 factory: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Factory' },
//                 teamId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Teammember' },
//                 status: { type: Number, required: true, default: 0 },
//                 report: {
//                     data: { type: String },
//                     comments: [
//                         {
//                             message: { type: String, required: true },
//                             createdBy: { type: mongoose.Schema.Types.ObjectId },
//                             date: { type: Date, required: true },
//                         },
//                     ],
//                 },
//             },
//         ],
//         createdBy: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User',
//             required: true,
//         },
//         members: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: 'User',
//                 required: true,
//             },
//         ],
//     },
//     {
//         timestamps: true,
//     },
// );

// /**
//  * @typedef schedule
//  */

// // export interface Ischedule {
// //     _id: string;
// //     name: string;
// // }

// // export default mongoose.model<Ischedule & mongoose.Document>('schedule', scheduleSchema);
// export default mongoose.model('schedule', ScheduleSchema);
