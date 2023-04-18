const { model, Schema }= require('mongoose');

const CategorySchema = Schema({

    name: {
        type: String,
        required: [true, 'Name is required']
    },

    isDeleted: {
        type: Boolean,
        default: false
    }

});

module.exports = model('Category', CategorySchema);