const jwt = require('jsonwebtoken');
const User = require('../models/user');

const generateJWT = async (uid = '') => {

    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRET_PRIVATE_KEY_JWT, {
            expiresIn: '72h'
        }, (error, token) => {
            if(error) {
                console.log(error);
                reject("It occurred an error to try to generate the token");
            } else {
                resolve(token);
            }
        });

    });
    
};

const verifyJWT = async (token = '') => {
    try {
        if(token.length < 10) return null;

        const { uid } = jwt.verify(token, process.env.SECRET_PRIVATE_KEY_JWT);
        const user = await User.findById(uid);

        if(!user || user.isDeleted) return null
        console.log(user);
        return user;

    } catch (error) {
        console.log(error);
        return null
    }
};

module.exports = {
    generateJWT,
    verifyJWT
};
