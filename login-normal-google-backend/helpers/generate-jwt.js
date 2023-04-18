const jwt = require('jsonwebtoken');

const generateToken = (uid = '') => {

    return new Promise((resolve, reject) => {

        const payload = { uid };
        
        jwt.sign(payload, process.env.SECRET_PRIVATE_KEY, { expiresIn: '24h' }, (error, token) => {
            if(error) {
                reject("Token can't be generated");
            } else {
                resolve(token)
            }
        });
        
    });
    
}

module.exports = { generateToken };