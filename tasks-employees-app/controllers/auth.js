const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-jwt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const data = req.body;
        const user = await User.findOne({ email: data.email });

        if(!user) return res.status(401).json({ msg: `Invalid credentials - Email address` });

        if(!bcryptjs.compareSync(data.password, user.password)) return res.status(401).json({ msg: `Invalid credentials - Password` });

        const token = await generateJWT(user.id);
        res.status(200).json({
            user,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json('Server error');
    }
};

const renewJWT = async (req, res)=> {
    const { user } = req;

    const token = await generateJWT(user.id);
    
    res.json({
        user,
        token
    });
};

module.exports = {
    login,
    renewJWT
};