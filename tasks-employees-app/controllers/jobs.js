const Job = require('../models/job');

const createJob = async (req, res) => {
    try {
        
        const data = req.body;
        const job = new Job(data);
        await job.save();

        res.status(200).json(job);


    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server error'
        });
    }
};

const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const job = await Job.findByIdAndUpdate(id, data, { new: true });
        await job.save();

        res.status(200).json(data);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: 'Server error'
        });
    };

};

const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;

        const job = await Job.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        await job.save();

        res.json(job);

    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: 'Server error'
        });
    }
};

const getJobs = async (req, res) => {
    try {
        const { limit = 5, start = 0 } = req.params;
        const query = { isDeleted: false };

        const requests = await Promise.all([
            Job.find(query).skip(start).limit(limit),
            Job.countDocuments(query)
        ]);

        const [ jobs, total ] = requests;
        res.json({  total, jobs });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: 'Server error'
        });
    }
};

const getJob = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id);
        res.json(job);
    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: 'Server error'
        });
    }
}

module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getJobs,
    getJob
};