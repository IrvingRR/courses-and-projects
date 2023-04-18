const { Router } = require('express');
const { createUser } = require('../controllers/users');
const { check } = require('express-validator');
const { validateExistEmailAddress } = require('../helpers/validations');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email address is required').not().isEmpty(),
    check('email', 'Invalid email address').isEmail(),
    check('email').custom(validateExistEmailAddress),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must to have minimum 8 characters').isLength({ min: 8 }),
    validateFields
], createUser);

module.exports = router;