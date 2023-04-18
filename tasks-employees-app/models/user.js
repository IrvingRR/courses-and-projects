const { model, Schema } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },

    area: {
        type: String,
        required: [true, 'The work area is required']
    },

    technologies: {
        type: Array,
        default: [],
        required: [true, 'Technologies are requried']
    },

    job: {
        type: String,
        required: [true, 'Job is required']
    },

    email: {
        type: String,
        required: [true, 'Email address is required'],
        unique: true
    },

    password: { 
        type: String,
        required: [true, 'Password is required']
    },

    picture: {
        type: String,
    },

    role: {
        type: String,
        required: [true, 'Role is requried']
    },

    status: {
        type: String,
        enum: ['Online', 'Offline', 'InternetProblems'],
        default: 'Online'
    },

    isDeleted: {
        type: Boolean,
        default: false
    }

});

UserSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user } = this.toObject();
    user.id = _id;
    return user;
}


module.exports = model('User', UserSchema);