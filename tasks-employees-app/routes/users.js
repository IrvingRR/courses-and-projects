const { Router } = require('express');
const { createUser, updateUser, deleteUser, getUsers, updatePassword, updateRole } = require('../controllers/users');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateExistUserWithEmail, validateExistUserWithID, validateUserIsNotDeleted, validateExistAreaInDB, validateExistJobInDB, validateExistRolerInDB } = require('../helpers/');
const { validateJWT } = require('../middlewares/validate-jwt');
const { validateIsAdmin, validateIsSuperAdmin } = require('../middlewares/valiadate-role');

const router = Router();

router.post('/', [
    validateJWT,
    validateIsAdmin,
    check('name', 'Name is required').not().isEmpty(),
    check('area', 'Area is required').not().isEmpty(),
    check('area').custom(validateExistAreaInDB),
    check('technologies', 'Technologies are required').isLength({ min: 1 }),
    check('job', 'Job is required').not().isEmpty(),
    check('job').custom(validateExistJobInDB),
    check('role', 'Role is required').not().isEmpty(),
    check('role').custom(validateExistRolerInDB),
    check('email', 'Email address is required').not().isEmpty(),
    check('email', 'Invalid email address').isEmail(),
    check('email').custom(validateExistUserWithEmail),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must to have minimum 8 characters').isLength({ min: 8 }),
    validateFields
], createUser);

router.put('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistUserWithID),
    validateFields
], updateUser);

router.delete('/:id', [
    validateJWT,
    validateIsAdmin,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistUserWithID),
    validateFields
], deleteUser);

router.get('/', [ validateJWT,
    validateIsAdmin,
    validateFields
], getUsers);

router.get('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistUserWithID),
    check('id').custom(validateUserIsNotDeleted),
    validateFields
], deleteUser);

router.put('/password/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistUserWithID),
    check('id').custom(validateUserIsNotDeleted),
    check('oldPassword', "Old password can't be empty").not().isEmpty(),
    check('password', "Password can't be empty").not().isEmpty(),
    check('password', 'Password must to have minimum 8 characters').isLength({ min: 8 }),
    validateFields
], updatePassword);

router.put('/role/:id', [
    validateJWT,
    validateIsSuperAdmin,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistUserWithID),
    check('id').custom(validateUserIsNotDeleted),
    check('role', 'Role is required').not().isEmpty(),
    check('role').custom(validateExistRolerInDB),
    validateFields
], updateRole);
module.exports = router;