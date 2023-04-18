const Job = require('../models/job');

// The job is already created
const validateExistJobAlready = async (job = '') => {
    const jobDB = await Job.findOne({ job });

    if(jobDB) {
        throw new Error(`Is already exist one job similar to ${job}`);
    }
};

// Exist the job with the id
const validateExistJobWithID = async (id) => {
    const job = await Job.findById(id);

    if(!job) {
        throw new Error(`Doesn't exist the job with the id: ${id}`);
    }
};

// The job is not deleted
const validateJobIsNotDeleted = async (id) => {
    const job = await Job.findById(id);

    if(job.isDeleted) {
        throw new Error(`Doesn't exist the job with the id: ${id}`);
    }
};

module.exports = { 
    validateExistJobAlready,
    validateExistJobWithID,
    validateJobIsNotDeleted
};