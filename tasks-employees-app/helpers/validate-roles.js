const Role = require('../models/role');

// The role is already created
const validateExistRole = async (role = '') => {
    const name = role.toUpperCase().replace(' ', '_') + '_ROLE';
    const roleDB = await Role.findOne({value: name});

    if(roleDB) {
        throw new Error(`Is already exist one role similar to ${role}`);
    };
};

// Exist one role with that id
const validateExistRoleWithID = async (id) => {
    const roleDB = await Role.findById(id);

    if(!roleDB) {
        throw new Error(`Doesn't exist the role with the ID: ${id}`);
    };
};

// The role is not deleted
const validateRoleIsNotDeleted = async (id) => {
    
    const role = await Role.findById(id);
    if(role.isDeleted) {
        throw new Error(`Doesn't exist the role with the ID: ${id}`);
    };
    
};

const validateExistRolerInDB = async (role) => {
    const roleDB = await Role.findOne({ value: role });

    if(!roleDB) {
        throw new Error(`Invalid role`);
    }
};

module.exports = {
    validateExistRole,
    validateExistRoleWithID,
    validateRoleIsNotDeleted,
    validateExistRolerInDB
};