const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const createUser = async (req, res) => {

    const data = req.body;

    const salt = bcryptjs.genSaltSync();
    data.password = bcryptjs.hashSync(data.password, salt);

    const user = await new User(data);
    await user.save();

    res.json(user);

}

module.exports = {
    createUser
};