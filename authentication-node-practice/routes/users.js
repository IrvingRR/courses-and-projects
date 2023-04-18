const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { createUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/users');
const { validateExistUserWithID, validateUserIsNotDeleted, validateEmailExistAlready } = require('../helpers/users-validations');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Invalid email address').isEmail(),
    check('email').custom(validateEmailExistAlready),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must have minimum 8 characters').isLength({ min: 8 }),
    validateFields
], createUser);

router.get('/', getUsers);

router.get('/:id', [
    check('id', 'The ID is not valid').isMongoId(),
    check('id').custom(validateExistUserWithID),
    check('id').custom(validateUserIsNotDeleted),
    validateFields
], getUser);

router.put('/:id', [
    check('id', 'The ID is not valid').isMongoId(),
    check('id').custom(validateExistUserWithID),
    check('id').custom(validateUserIsNotDeleted),
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must have minimum 8 characters').isLength({ min: 8 }),
    check('role', 'The role is invalid').isIn(['ADMIN_ROLE', 'EMPLOYEE_ROLE']), 
    validateFields
], updateUser);

router.delete('/:id', [
    validateJWT,
    check('id').isMongoId(),
    check('id').custom(validateExistUserWithID),
    check('id').custom(validateUserIsNotDeleted),
    validateFields
], deleteUser );

module.exports = router; 