const { model, Schema } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
    },

    password: {
        type: String,
        required: [true, 'Password is required']
    },

    role: { 
        type: String,
        enum: ['ADMIN_ROLE', 'EMPLOYEE_ROLE', 'SUPER_ADMIN'],
        default: 'EMPLOYEE_ROLE'
    },

    isDeleted: {
        type: Boolean,
        default: false
    },
});

module.exports = model('User', UserSchema);