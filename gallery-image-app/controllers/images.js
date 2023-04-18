const { uploadFile } = require('../helpers/upload-file');
const Image = require('../models/image');
const path = require('path');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config(process.env.CLOUDINARY_URL);

const createImageOld = async (req, res) => {

    try {
        const data = req.body;
        const nameImage = await uploadFile(req.files);
        data.image = nameImage;

        const image = new Image(data);
        await image.save();
        res.json(image);

    } catch (error) {
        res.status(400).json({ msg: error });
    }

};

const createImage = async (req, res) => {

    const { tempFilePath } = req.files.file;
    const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
    const data = req.body;
    data.image = secure_url;

    const image = new Image(data);
    await image.save();
    res.json(image);
    
};

const updateImageOld = async (req, res) => {

    const { id } = req.params;
    const data = req.body;
    const image = await Image.findByIdAndUpdate(id, data, { new: true });

    const pathImage = path.join(__dirname, '../uploads', image.image);

    if(fs.existsSync(pathImage)) {
        fs.unlinkSync(pathImage);
    }

    const nameImage = await uploadFile(req.files);
    image.image = nameImage;
    await image.save();

    res.json(image);

};

const updateImage = async (req, res) => {

    const { id } = req.params;
    const data = req.body;  
    const image = await Image.findByIdAndUpdate(id, data, { new: true });

    const nameArray = image.image.split('/');
    const name = nameArray[nameArray.length - 1].split('.');
    const [id_public] = name;
    cloudinary.uploader.destroy(id_public);

    const { tempFilePath } = req.files.file;
    const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
    image.image = secure_url;

    await image.save();
    res.json(image);

};

const deleteImage = async (req, res) => {
    const { id } = req.params;
    const image = await Image.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    await image.save();
    res.json(image);
};

const getImages = async (req, res) => {

    const query = { isDeleted: false };

    const requests = await Promise.all([
        Image.countDocuments(query),
        Image.find(query)
    ]);

    const [ total, images ] = requests;
    res.json({ total, images });

};

module.exports = {
    createImage,
    updateImage,
    deleteImage,
    getImages
};
