const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-jwt');

const login = async (req, res) => {
    const data = req.body;
    
    const user = await User.findOne({ email: data.email });

    if(!user) {
       return res.status(401).json({ msg: 'Incorrect credentials / [Email address]'});
    }

    if(user.isDeleted) {
       return res.status(401).json({ msg: 'Incorrect credentials / [User is deleted]'});
    }

    const passwordIsEqual = bcryptjs.compareSync(data.password, user.password);

    if(!passwordIsEqual) {
       return res.status(401).json({ msg: 'Incorrect credentials / [Password]'});
    }

    const token = await generateJWT(user.id);

    res.json({ user, token, msg: `Welcome ${user.name}` });
}

const googleLogin = async (req, res) => {
   res.json({msg: 'Google login'});
}

module.exports = { login, googleLogin };