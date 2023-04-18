const User = require("../models/user");

const validateEmailExist = async (email = '') => {
    const existEmail = await User.findOne({ email });

    if(existEmail) {
        throw new Error(`Email ${email} is used already`);
    }
};

module.exports = { validateEmailExist };