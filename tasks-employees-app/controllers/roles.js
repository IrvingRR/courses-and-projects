const Role = require('../models/role');

const createRole = async (req, res) => {
    try {

        const data = req.body;
        data.value = data.role.toUpperCase().replace(' ', '_') + '_ROLE';

        const role = new Role(data);
        await role.save();

        res.status(200).json(role);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server error'
        });
    }
};

const updateRole = async (req, res) => {
    try {
        const { id } = req.params;

        const data = req.body;
        data.value = data.role.toUpperCase().replace(' ', '_') + '_ROLE';
        const role = await Role.findByIdAndUpdate(id, data, {new: true});

        await role.save();
        res.status(200).json(role);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server error'
        });
    }
};

const deleteRole = async (req, res) => {
    try {
        const { id } = req.params;

        const role = await Role.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
        await role.save();

        res.status(200).json(role);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server error'
        });
    }
};

const getRoles = async (req, res) => {
    try {
        const { limit = 5, start = 0 } = req.params;

        const query = {
            isDeleted: false
        };

        const requests = await Promise.all([
        Role.find(query).skip(start).limit(limit),
        Role.countDocuments(query) 
        ]);

        const [roles, total] = requests;
        
        res.json({
            total, roles
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server error'
        });
    }
};

const getRole = async (req, res) => {

    try {

        const { id } = req.params;

        const role = await Role.findById(id);
        res.json(role);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Server error'
        });
    }

};

module.exports = {
    createRole,
    updateRole,
    deleteRole,
    getRoles,
    getRole
};