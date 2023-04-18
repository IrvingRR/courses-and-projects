const { model, Schema } = require('mongoose');

const TaskSchema = Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },

    description: { 
        type: String,
        required: [true, 'Description is required']
    },

    area: {
        type: String,
        required: [true, 'Area is required']
    },

    job: {
        type: String,
        required: [true, 'Job is required']
    },

    status: {
        type: String,
        enum: ['Completed', 'Process', 'Pending'],
        default: 'Pending'
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },

    isDeleted: {
        type: Boolean,
        default: false
    }
});

TaskSchema.methods.toJSON = function() {
    const { __v, _id, ...task } = this.toObject();
    task.id = _id;
    return task;
}

module.exports = model('Task', TaskSchema);