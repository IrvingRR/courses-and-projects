const User = require('../models/user');
const Area = require('../models/area');
const Job = require('../models/job');

const validateExistUserWithEmail = async (email = '') => {
    const userDB = await User.findOne({ email });

    if(userDB) {
        throw new Error(`Email address not available`);
    }
};

const validateExistUserWithID = async (id) => {
    const userDB = await User.findById(id);

    if(!userDB) {
        throw new Error(`Doesn't exist the user with the id: ${id}`);
    }
};

const validateUserIsNotDeleted = async (id) => {
    const userDB = await User.findById(id);

    if(userDB.isDeleted) {
        throw new Error(`Doesn't exist the user with the id: ${id}`);
    }
}

module.exports = {
    validateExistUserWithEmail,
    validateExistUserWithID,
    validateUserIsNotDeleted,
};