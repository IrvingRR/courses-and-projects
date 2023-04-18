const { Router } = require('express');
const { createArea, updateArea, deleteArea, getAreas, getArea } = require('../controllers/areas');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateExistAreaAlready, validateExistAreaWithID, validateAreaIsNotDeleted } = require('../helpers/');

const router = Router();

router.post('/', [
    check('area', 'Area is required').not().isEmpty(),
    check('area').custom(validateExistAreaAlready),
    validateFields
], createArea);

router.put('/:id', [
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistAreaWithID),
    check('area', 'Area is required').not().isEmpty(),
    validateFields
], updateArea);

router.delete('/:id', [
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistAreaWithID),
    validateFields
], deleteArea);

router.get('/', getAreas);

router.get('/:id', [
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistAreaWithID),
    check('id').custom(validateAreaIsNotDeleted),
    validateFields
], getArea);

module.exports = router;