const { Router } = require('express');
const { createImage, updateImage, deleteImage, getImages } = require('../controllers/images');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateCategory, validateExistImage } = require('../helpers/db-validations');
const { validateFile } = require('../middlewares/validate-file');


const router = Router();

router.get('/', getImages);

router.post('/', [
    check('title', 'Title is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
    check('category').custom(validateCategory),
    validateFile,
    validateFields
], createImage);

router.put('/:id', [
    check('id', 'Invalid id').isMongoId(),
    check('id').custom(validateExistImage),
    check('title', 'Title is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
    check('category').custom(validateCategory),
    validateFile,
    validateFields
], updateImage);

router.delete('/:id', [
    check('id', 'Invalid id').isMongoId(),
    check('id').custom(validateExistImage),
    validateFields
], deleteImage);


module.exports = router;