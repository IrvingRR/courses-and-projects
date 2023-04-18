const jwt = require('jsonwebtoken');
const User = require('../models/user');

const validateJWT = async (req, res, next) => {
    const token = req.header('x-token');

    if(!token) return res.status(401).json({ msg: 'Authentication token is required' });

    try {
        
        const { uid } = jwt.verify(token, process.env.SECRET_PRIVATE_KEY_JWT);
        const user = await User.findById(uid);

        if(!user) return res.status(401).json({ msg: "Invalid token - [User does not exist in the databse]" });

        if(user.isDeleted) res.status(401).json({ msg: 'Invalid token - User is deleted' });

        req.user = user;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json('Invalid token');
    }
};

module.exports = {
    validateJWT
};