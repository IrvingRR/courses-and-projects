const { model, Schema } = require('mongoose');

const ChatMessage = Schema({
    message: {
        type: String,
        required: [true, 'Message is required']
    },

    idFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },

    idTo: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
    },

    isImportant: {
        type: Boolean,
        default: false
    },

    isDeleted: {
        type: Boolean,
        default: false
    }
});

ChatMessage.methods.toJSON = function() {
    const { __v, _id, ...chat } = this.toObject();
    chat.id = _id;
    return chat;
}

module.exports = model('Message', ChatMessage);