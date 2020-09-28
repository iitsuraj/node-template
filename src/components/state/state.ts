/**
 * Template file for Model layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */
import mongoose, { Schema } from 'mongoose';
import ErrorHandler from 'src/helpers/error';

const stateSchema = new mongoose.Schema({
    name: { type: String, default: 'suraj saini' },
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * @typedef state
 */

export interface Istate {
    _id: string;
    name: string;
}

export default mongoose.model<Istate & mongoose.Document>('state', stateSchema);
