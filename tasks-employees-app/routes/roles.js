const { Router } = require('express');
const { createRole, updateRole, deleteRole, getRoles, getRole } = require('../controllers/roles');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateExistRole, validateExistRoleWithID, validateRoleIsNotDeleted } = require('../helpers');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post('/', [
    validateJWT,
    check('role', 'Role is required').not().isEmpty(),
    check('role').custom(validateExistRole),
    validateFields
], createRole);

router.put('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistRoleWithID),
    check('role', 'Role is required').not().isEmpty(),
    check('role').custom(validateExistRole),
    validateFields
], updateRole);

router.delete('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistRoleWithID),
    validateFields
], deleteRole);

router.get('/', [validateJWT], getRoles);

router.get('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistRoleWithID),
    check('id').custom(validateRoleIsNotDeleted),
    validateFields
], getRole);

module.exports = router;