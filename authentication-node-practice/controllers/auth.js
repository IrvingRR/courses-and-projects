const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const { generateToken } = require('../helpers/generate-token');

const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    
    if(!user) {
        return res.status(401).json({ msg: 'Invalid credentials - [Incorrect Email address]' });
    }

    if(user.isDeleted) {
        return res.status(401).json({ msg: 'Invalid credentials - [User does not exist]' });
    }
    const isCorrectPassword = bcryptjs.compareSync(password, user.password);

    if(!isCorrectPassword) {
        return res.status(401).json({ msg: 'Invalid credentials - [Incorrect password]' });
    }

    const token = await generateToken(user.id);
    res.json({ user, token });

}

module.exports = { login };