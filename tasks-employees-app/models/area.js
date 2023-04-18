const { model, Schema } = require('mongoose');

const AreaSchema = Schema({
    area: {
        type: String,
        required: [true, 'Area is required']
    },

    description: {
        type: String,
        default: 'No description'
    },

    isDeleted: {
        type: Boolean,
        default: false
    }

});

AreaSchema.methods.toJSON = function() {
    const { __v, _id, ...area } = this.toObject();
    area.id = _id;
    return area;
}


module.exports = model('Area', AreaSchema);