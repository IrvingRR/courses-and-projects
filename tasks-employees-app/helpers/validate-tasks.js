const Task = require('../models/task');
const Area = require('../models/area');
const Job = require('../models/job');

const validateExistTask = async (title = '') => {
    const taskDB = await Task.findOne({ title });

    if(taskDB) {
        throw new Error(`Is already exist one task similar to ${title}`);
    }
};

const  validateExistAreaInDB = async (area = '') => {
    const areaDB = await Area.findOne({ area });

    if(!areaDB) {
        throw new Error(`The area ${area} is invalid`);
    }
};

const validateExistJobInDB = async (job = '') => {
    const jobDB = await Job.findOne({ job });

    if(!jobDB) {
        throw new Error(`The job ${job} is invalid`);
    }
}

const validateExistTaskWithID = async (id) => {
    const taskDB = await Task.findById(id);

    if(!taskDB) {
        throw new Error(`Doesn't exist the task with the id: ${id}`);
    }
};

const validateTaskIsNotDeleted = async (id) => {
    const taskDB = await Task.findById(id);

    if(taskDB.isDeleted) {
        throw new Error(`Doesn't exist the task with the id: ${id}`);
    }
}

module.exports = {
    validateExistTask,
    validateExistAreaInDB,
    validateExistJobInDB,
    validateExistTaskWithID,
    validateTaskIsNotDeleted
};