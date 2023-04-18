const { model, Schema } = require('mongoose');

const RoleSchema = Schema({
    role: {
        type: String,
        required: [true, 'Name is required']
    },

    value: {
        type: String,
    },

    isDeleted: {
        type: Boolean,
        default: false 
    }
});

RoleSchema.methods.toJSON = function() {
    const { __v, _id, ...role } = this.toObject();
    role.id = _id;
    return role;
}

module.exports = model('Role', RoleSchema);