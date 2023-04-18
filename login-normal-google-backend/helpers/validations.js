const User = require('../model/user');

const validateExistEmailAddress = async (email) => {
    const user = await User.findOne({ email });

    if(user) {
        throw new Error(`The email ${email} is exist already`);
    }
}

module.exports = {  
    validateExistEmailAddress
}