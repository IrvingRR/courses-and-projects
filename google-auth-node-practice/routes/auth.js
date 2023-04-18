const { Router } = require('express');
const { login, googleLogin } = require('../controllers/auth');
const { check } = require('express-validator');
const { checkValidations } = require('../middlewares/check-validations');

const router = Router();

router.post('/login', [
    check('email', 'Email address is required').not().isEmpty(),
    check('email', 'Invalid email address').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must to have minimum 8 characters').isLength({ min: 8 }),
    checkValidations
], login);

router.post('/google', googleLogin);

module.exports = router;