const User = require('../models/user');
const Area = require('../models/area');
const Role = require('../models/role');
const Job = require('../models/job');
const Task = require('../models/task');

const searchUsers = async (term = '', res) => {
    try {
        const regex = new RegExp(term, 'i');
        const users = await User.find({
            $or: [
                { name: regex },
                { email: regex },
                { area: regex }, 
                { role: regex }, 
                { status: regex }, 
                { job: regex }],
            $and: [{ isDeleted: false }]
        });

        res.json({ results: users });
    } catch (error) {
        console.log(error);
        res.status(500).json(`Server error`);
    }
};

const searchAreas = async (term = '', res) => {
    try {
        const regex = new RegExp(term, 'i');
        const areas = await Area.find({
            area: regex,
            isDeleted: false
        });

        res.json({ results: areas });
    } catch (error) {
        console.log(error);
        res.status(500).json(`Server error`);
    }
};

const searchRoles = async (term = '', res) => {
    try {
        
        const regex = new RegExp(term, 'i');
        const roles = await Role.find({
            $or: [{ role: regex }, { value: regex }],
            $and: [{ isDeleted: false }]
        });

        res.json({ results: roles });

    } catch (error) {
        console.log(error);
        res.status(500).json('Server error');
    }
};

const searchJobs = async (term = '', res) => {
    const regex = new RegExp(term, 'i');
    const jobs = await Job.find({
        job: regex,
        isDeleted: false
    });

    res.json({ results: jobs });
};

const searchTasks = async (term = '', res) => {
    const regex = new RegExp(term, 'i');
    const tasks = await Task.find({
        $or: [
            { title: regex},
            { area: regex },
            { job: regex },
            { status: regex }
        ],
        $and: [{ isDeleted: false }]
    });

    res.json({ results: tasks });
};

module.exports = {
    searchUsers,
    searchAreas,
    searchRoles,
    searchJobs,
    searchTasks
};