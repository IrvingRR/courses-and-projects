const { Router } = require('express');
const { validateFields } = require('../middlewares/validate-fields');
const { check } = require('express-validator');
const { validateExistCategory } = require('../helpers/db-validations');
const { createCategory, updateCategory, deleteCategory, getCategories, getCategory } = require('../controllers/categories');

const router = Router();

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    validateFields
], createCategory);

router.put('/:id', [
    check('id', 'Invalid id').isMongoId(),
    check('id').custom(validateExistCategory),
    check('name', 'Name is required').not().isEmpty(),
    validateFields
], updateCategory);

router.delete('/:id', [
    check('id', 'Invalid id').isMongoId(),
    check('id').custom(validateExistCategory),
    validateFields
], deleteCategory);

router.get('/', getCategories);

router.get('/:id', [
    check('id', 'Invalid id').isMongoId(),
    check('id').custom(validateExistCategory),
    validateFields
], getCategory);

module.exports = router;