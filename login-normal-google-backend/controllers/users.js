const bcryptjs = require('bcryptjs');
const User = require('../model/user');

const createUser = async (req, res) => {

    const data = req.body;
    const salt = bcryptjs.genSaltSync();
    data.password = bcryptjs.hashSync(data.password, salt);

    const user = await new User(data);
    await user.save();

    res.json({ message: 'User created successfully!', user });

};

module.exports = {
    createUser,
};