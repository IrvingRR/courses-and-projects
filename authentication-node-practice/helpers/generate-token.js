const jwt = require('jsonwebtoken');

const generateToken = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };

        jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' }, (err, token) => {
            if(err) {
                reject("Somethinh wnt wrong, the token can't be generated");
            } else {
                resolve(token);
            }
        });
    });
}

module.exports = { generateToken };