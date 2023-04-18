const { Router } = require('express');
const { createUser } = require('../controllers/users');
const { check } = require('express-validator');
const { checkValidations } = require('../middlewares/check-validations');
const { validateExistEmailAlready } = require('../helpers/validations');

const router = Router();


router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email address is required').not().isEmpty(),
    check('email', 'Invalid email address').isEmail(),
    check('email').custom(validateExistEmailAlready),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must have minimum 8 characters').isLength({ min: 8 }),
    checkValidations
], createUser);


module.exports = router;