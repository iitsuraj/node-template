import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import ErrorHandler from 'src/helpers/error';
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: Number,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        region: {
            type: String,
            required: String,
        },
        district: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'District',
        },
        state: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'State',
        },
        role: {
            type: String,
            default: 'user',
        },
        clusterId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Clusterid',
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

UserSchema.pre('save', function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user: any = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            throw new ErrorHandler(500, 'Unable to Hash Password', 'password_hash', err);
        }
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) {
                throw new ErrorHandler(500, 'Unable to Hash Password', 'password_hash', err);
            }
            user.password = hash;
            next();
        });
    });
});

//password check
UserSchema.methods.comparePassword = function (password: string) {
    return bcrypt.compareSync(password, this.password);
};
export default mongoose.model('user', UserSchema);
