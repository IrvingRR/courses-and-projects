const Area = require('../models/area');

// The area is already created
const validateExistAreaAlready = async (area = '') => {
    const areaDB = await Area.findOne({ area });

    if(areaDB) {
        throw new Error(`Is already exist one area similar to ${area}`);
    };
};

// Exist one area with that id
const validateExistAreaWithID = async (id) => {
    const area = await Area.findById(id);

    if(!area) {
        throw new Error(`Doesn't exist the area with the id: ${id}`);
    };
};

// The area is not deleted
const validateAreaIsNotDeleted = async (id) => {
    const area = await Area.findById(id);

    if(area.isDeleted) {
        throw new Error(`Doesn't exist the area with the id: ${id}`);
    };
};


module.exports = {
    validateExistAreaAlready,
    validateExistAreaWithID,
    validateAreaIsNotDeleted
};