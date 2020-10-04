/**
 * Template file for Model layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */
import mongoose, { Schema } from 'mongoose';
import ErrorHandler from 'src/helpers/error';

const (QQ)Schema = new mongoose.Schema(
    {
        name: { type: String, default: 'suraj saini' },
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
 * @typedef (qq)
 */

export interface I(qq) {
    _id: string;
    name: string;
}

export default mongoose.model<I(qq) & mongoose.Document>('(qq)', (QQ)Schema);
