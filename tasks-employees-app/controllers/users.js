const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const createUser = async (req, res) => {
    
    try {
        const data = req.body;
        const salt = bcryptjs.genSaltSync();
        data.password = bcryptjs.hashSync(data.password, salt);

        const user = new User(data);
        await user.save();

        res.status(200).json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server error'
        });
    }

};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, ...data } = req.body;

        const user = await User.findByIdAndUpdate(id, data, { new: true });
        await user.save();

        res.status(200).json(user);
       
        
    } catch (error) {
        res.status(500).json({
            msg: 'Server error'
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        await user.save();

        res.json(user);
    } catch (error) {
        res.status(500).json('Server error');
    }
};

const getUsers = async (req, res) => {
    try {
        
        const { limit = 5, start = 0 } = req.params;
        const query = { isDeleted: false };

        const requests = await Promise.all([
            User.find(query).skip(start).limit(limit),
            User.countDocuments(query)
        ]);

        const [users, total] = requests;
        res.json({ total, users });


    } catch (error) {
        res.status(500).json('Server error');
    }
};

const updatePassword = async (req, res) => {
    
    try {
        const { id } = req.params;
        const data = req.body;
        const userDB = await User.findById(id);
        const isEqual = bcryptjs.compareSync(data.oldPassword, userDB.password);

        if(!isEqual) return res.status(401).json({ msg: `The old password is incorrect` });
        
        const salt = bcryptjs.genSaltSync();
        data.password = bcryptjs.hashSync(data.password, salt);
        
        await User.updateOne({ _id: id }, { password: data.password }, { new: true });
        res.status(200).json(userDB);

    } catch (error) {
        console.log(error);
        res.status(500).json('Server error');
    }

};

const updateRole = async (req, res) => {
    try {

        const { id } = req.params;
        const { role } = req.body;
        const user = await User.findByIdAndUpdate(id, { role }, { new: true });

        await user.save();
        res.status(200).json(user); 
        
    } catch (error) {
        console.log(error);
        res.status(500).json('Server error');
    }
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    updatePassword,
    updateRole
};