const { model, Schema } = require('mongoose');

const JobSchema = Schema({
    job: {
        type: String,
        required: [true, 'Job is required']
    },

    isDeleted: {
        type: Boolean,
        default: false
    }
});

JobSchema.methods.toJSON = function() {
    const { __v, _id, ...job } = this.toObject();
    job.id = _id;
    return job;
}

module.exports = model('Job', JobSchema);