const Task = require('../models/task');

const createTask = async (req, res) => {
    try {
        
        const data = req.body;
        const task = new Task(data);
        await task.save();

        res.status(200).json(task);


    } catch (error) {
        console.log(error);
        res.status(500).json('Server error');
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const task = await Task.findByIdAndUpdate(id, data, { new: true });

        await task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json('Server error');
    }
};

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        await task.save();

        res.json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json('Server error');
    }

};

const getTasks = async (req, res) => {
    try {
        const { limit = 5, start = 0 } = req.params;
        const query = { isDeleted: false };

        const requests = await Promise.all([
            Task.find(query).skip(start).limit(limit).populate('user', 'name'),
            Task.countDocuments(query)
        ]);

        const [tasks, total] = requests;
        res.json({ total, tasks });
        
    } catch (error) {
        console.log(error);
        res.status(500).json('Server error');
    }
}

const getTask = async (req, res) => {
    try {
        
        const { id } = req.params;
        const task = await Task.findById(id);

        res.json(task);

    } catch (error) {
        res.status(500).json('Server error');
    }
};

const getTasksUser = async (req, res) => {
    try {
        const { id, limit = 5, start = 0 } = req.params;
        const query = { isDeleted: false, user: id };

        const requests = await Promise.all([
            Task.find(query).skip(start).limit(limit).populate('user', 'name'),
            Task.countDocuments(query)
        ]);

        const [tasks, total] = requests;
        res.json({ total, tasks });
        
    } catch (error) {
        res.status(500).json('Server error');
    }
};

module.exports = {
    createTask,
    updateTask,
    deleteTask,  
    getTasks,
    getTask,
    getTasksUser
};