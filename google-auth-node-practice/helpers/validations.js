const User = require('../models/user');

const validateExistEmailAlready = async (email = '') => {
    const user = await User.findOne({ email });

    if(user) {
        throw new Error(`Email address ${email} is not available`);
    }
};

module.exports = {  
    validateExistEmailAlready
}