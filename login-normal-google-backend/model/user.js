const { model, Schema } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
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

    image: {
        type: String,
        default: 'https://i.pinimg.com/564x/a5/2e/3e/a52e3ead549f0fef288d9d074b979df2--computer.jpg'
    },

    googleAccount: {
        type: Boolean,
        default: false
    },

    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = model('User', UserSchema);