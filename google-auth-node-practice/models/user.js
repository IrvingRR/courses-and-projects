const { model, Schema } = require('mongoose');

const UserSchema = Schema({

    name: {
        type: String,
        required: [true, 'Name is required']
    },

    email: {
        type: String,
        requried: [true, 'Email address is required']
    },

    password: {
        type: String,
        required: [true, 'Password is required']
    },

    picture: {
        type: String
    },

    role: {
        type: String,
        enum: ['ADMIN_ROLE', 'USER_ROLE'],
        default: 'USER_ROLE'
    },

    google: {
        type: Boolean,
        default: false
    },

    IsDeleted: {
        type: Boolean,
        default: false
    }

});

module.exports = model('User', UserSchema);