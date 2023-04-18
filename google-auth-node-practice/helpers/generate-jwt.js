const jwt = require('jsonwebtoken');

const generateJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };

        jwt.sign(payload, process.env.SECRET_PRIVATE_KEY, { 
            expiresIn: '24h'
         }, (err, token) => {
            if(err) {
                reject("Token can't be generated");
            } else {
                resolve(token);
            }
         })

    });
}

module.exports = { generateJWT };