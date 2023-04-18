const Category = require('../models/category');

const createCategory = async (req, res) => {
    const data = req.body;
    const regex = new RegExp(data.name, 'i');
    const categoryDB = await Category.findOne({ name: regex });

    if(categoryDB) {
        return res.status(400).json({ msg: `The category ${data.name} is exist already` });
    }

    const category = new Category(data);
    await category.save();
    res.status(201).json(category);
};

const updateCategory = async (req, res) => {

    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findByIdAndUpdate(id, { name }, { new: true });
    await category.save();
    res.json(category);

};

const deleteCategory = async (req, res) => {

    const { id } = req.params;
    const category = await Category.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    await category.save();
    res.json(category);

};

const getCategories = async (req, res) => {

    const query = { isDeleted: false };

    const requests = await Promise.all([
        Category.countDocuments(query),
        Category.find(query)
    ]);

    const [ total, categories ] = requests;
    res.json({ total, categories });

};

const getCategory = async (req, res) => {

    const { id } = req.params;

    const category = await Category.findById(id);
    res.json(category);
    
};

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategories,
    getCategory
};