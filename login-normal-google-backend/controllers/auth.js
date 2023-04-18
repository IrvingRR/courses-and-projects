const User = require('../model/user');
const bcryptjs = require('bcryptjs');
const { generateToken } = require('../helpers/generate-jwt');
const { googleVerify } = require('../helpers/google-verify');

const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if(!user) {
        return res.status(401).json({ message: 'Incorrect credentials / [Email address]' });
    }

    if(user.isDeleted) {
        return res.status(401).json({ message: 'Incorrect credentials / [User is deleted]' });
    }


    const passwordIsEqual = bcryptjs.compareSync(password, user.password);

    if(!passwordIsEqual) {
        return res.status(401).json({ message: 'Incorrect credentials / [Password]' });
    }

    // Generate token
    const token = await generateToken(user._id);
    res.json({ token, user });

}

const signInGoogle = async (req, res) => {
    const { id_token } = req.body;

    try {

        // Verify if token is validate
        const { name, email, picture } = await googleVerify(id_token);

        // Validate the user exist in the database if no exist so we going to create the user
        let user = await User.findOne({ email });

        if(!user) {
            // We are going to create the new user with the information from the google account
            const data = {
                name, 
                email,
                password: '.',
                image: picture,
                googleAccount: true,
            }

            user = new User(data);
            await user.save();
        }

        // Validate the user is not deleted
        if(user.isDeleted) {
            return res.status(401).json({message: 'Talk with the admin, blocked user'});
        }

        // Generate the token
        const token = await generateToken(user.id);
        
        res.json({ token, user });

        // Send the response

    } catch (error) {
        res.status(401).json(error);
    }
}

module.exports = { 
    login,
    signInGoogle
}