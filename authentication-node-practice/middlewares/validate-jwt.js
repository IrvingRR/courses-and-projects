const User = require('../models/user');
const jwt = require('jsonwebtoken');

const validateJWT = async (req, res, next) => {
    const token = req.header('x-token');

    if(!token) {
        return res.status(401).json({ msg: 'Token is required' });
    }

    try {

       const { uid } = jwt.verify(token, process.env.SECRET_KEY);
       const user = await User.findById(uid);

       if(!user) {
            return res.status(401).json({ msg: 'Invalid token - User does not exist' });
       }

       if(user.isDeleted) {
            return res.status(401).json({ msg: 'Invalid token - User is deleted' });
       }

       req.user = user;
       next();
        
    } catch (error) {
        console.log(error);
        res.status(401).json({ msg: 'Invalid token' });
    }
}

module.exports = { validateJWT };