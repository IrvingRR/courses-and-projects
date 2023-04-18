const { response } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const createUser = async (req, res = response) => {

    const data = req.body;

    const salt = bcryptjs.genSaltSync();
    data.password = bcryptjs.hashSync(data.password, salt);

    const user = new User(data);
    await user.save();

    res.json({
        user
    });
}

module.exports = {
    createUser
}