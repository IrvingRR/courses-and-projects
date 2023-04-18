const User = require('../models/user');

const validateEmailExistAlready = async (email) => {
    const user = await User.findOne({ email });

    if(user) { 
        throw new Error(`The email ${email} is already used`);
    }
}

const validateExistUserWithID = async (id) => {
    const user = await User.findById(id);

    if(!user) {
        throw new Error('Does not exist the user with this ID');
    }
}

const validateUserIsNotDeleted = async (id) => {
    const user = await User.findById(id);

    if(user && user.isDeleted) {
        throw new Error('Does not exist the user with this ID - [is deleted]');
    }
}

module.exports = {
    validateEmailExistAlready,
    validateExistUserWithID,
    validateUserIsNotDeleted
}