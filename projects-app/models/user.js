const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },

    lastname: {
        type: String,
        required: [true, 'Lastname is required']
    },

    image: {
        type: String,
        default: 'user-image-default.jpg'
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

    phone: {
        type: Number,
        required: [true, 'Phone is required']
    },

    role: {
        type: String,
        required: [true, 'Role is required']
    },

    state: {
        type: String,
        enum: ['AVAILABLE_STATUS', 'BUSY_STATUS', 'ON_CALL_STATUS', 'NOT_AVALIABLE_STATUS'],
        required: [true, 'Name is required'],
        default: 'AVAILABLE_STATUS'
    },

    team: {
        type: String,
        default: 'Bullpen'
    },

    areas: {
        type: [String],
        required: [true, 'Areas are required']
    },

    technologies: {
        type: [String],
        required: [true, 'Techonologies are required']
    },

    isAdmin: {
        type: Boolean,
        default: false
    },
    
    isDeleted: {
        type: Boolean,
        default: false
    },

    inProject: {
        type: Boolean,
        default: false
    }
});

UserSchema.methods.toJSON = function() {
    const { __v, password, ...user } = this.toObject();
    return user;
}

module.exports = model('User', UserSchema);