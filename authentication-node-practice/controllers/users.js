const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const createUser = async (req, res) => {
    const data = req.body;

    const salt = bcryptjs.genSaltSync();
    data.password = bcryptjs.hashSync(data.password, salt);

    const user = await new User(data);
    user.save();
    res.json(user);
}

const getUsers = async (req, res) => {

    const query = { isDeleted: false };
    
    const requests = await Promise.all([
        User.find(query),
        User.countDocuments(query)
    ]);

    const [ users, total ] = requests;
    res.json({ total, users });
}

const getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    if(data.password) {
        const salt = bcryptjs.genSaltSync();
        data.password = bcryptjs.hashSync(data.password, salt);
    }

    const user = await User.findByIdAndUpdate(id, data);
    res.json(user);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, { isDeleted: true });
    res.json(user);
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
}