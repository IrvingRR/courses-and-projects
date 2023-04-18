const Category = require('../models/category');
const Image = require('../models/image');

const validateExistCategory = async (id) => {

    const category = await Category.findById(id);
    
    if(!category) {
        throw new Error(`The category with the id ${id} doesn't exist`);
    }
};

const validateCategory = async (category = '') => {
    const categoryDB = await Category.findOne({ name: category });
    
    if(!categoryDB) {
        throw new Error(`The category ${category} is invalid`);
    }
};

const validateExistImage = async (id) => {

    const image = await Image.findById(id);
    
    if(!image) {
        throw new Error(`The image with the id ${id} doesn't exist`);
    }
};

module.exports = {
    validateExistCategory,
    validateCategory,
    validateExistImage
};