const { model, Schema } = require('mongoose');

const ImageSchema = Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },

    description: {
        type: String
    },

    category: {
        type: String,
        required: [true, 'Category is required']
    },

    image: {
        type: String,
        required: [true, 'Image is required']
    },

    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = model('Image', ImageSchema);