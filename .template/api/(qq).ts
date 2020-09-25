/**
 * Template file for Model layer
 * Work In Progress
 * TODO : complete the files, remove this comment
 */
import mongoose, { Schema } from 'mongoose';
import ErrorHandler from 'src/helpers/error';

const (qq)Schema = new mongoose.Schema({
    name: { type: String, default: 'suraj saini' },
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
(qq)Schema.method({});

/**
 * Statics
 */
(qq)Schema.statics = {
    /**
     * Get (qq)
     * @param {ObjectId} id - The objectId of (qq).
     * @returns {Promise<(qq), APIError>}
     */
    get(id: mongoose.Types.ObjectId) {
        return this.findById(id)
            .exec()
            .then(((qq): any) => {
                if ((qq)) {
                    return (qq);
                } else {
                    throw new ErrorHandler(404, 'No such (qq) found', 'query_failed');
                }
            })
            .catch((err: any) => {
                throw new ErrorHandler(500, 'Unable query your request', 'query_failed');
                /**
                 * Create a logger and export as local npm package
                 * TODO : create a logger
                 */
            });
    },
    /**
     * List users in descending order of 'createdAt' timestamp.
     * @parmas {number} skip - Number of users to be skipped.
     * @params {number} limit - Limit number of users to be returned.
     * @return {Promise<(qq)[]>}
     */
    list({ skip = 0, limit = 50 } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .skip(+skip)
            .limit(+limit)
            .exec();
    },
};

/**
 * @typedef (qq)
 */

interface I(qq) {
    _id: string;
    name: string;
}

export default mongoose.model<I(qq) & mongoose.Document>('(qq)', (qq)Schema);
