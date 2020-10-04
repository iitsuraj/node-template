import mongoose, { Schema } from 'mongoose';
import ErrorHandler from 'src/helpers/error';

/**
 * Roles
 * * Team Member = member
 * * Team Leader = leader
 * * ThirdParty Head = head
 * * Admin = admin
 */

const inviteSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        invitedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        role: { type: String, default: 'member' },
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
 * @typedef invite
 */

// export interface Iinvite {
//     _id: string;
//     name: string;
// }

export default mongoose.model('invite', inviteSchema);
