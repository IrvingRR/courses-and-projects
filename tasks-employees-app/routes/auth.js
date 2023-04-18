const { Router } = require('express');
const { login, renewJWT } = require('../controllers/auth');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post('/login', [
    check('email', 'Email address is required').not().isEmpty(),
    check('email', 'Invalid email address').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    check('password', 'Password must have minimum 8 characters').isLength({ min: 8 }),
    validateFields
], login);

router.get('/', [validateJWT, validateFields], renewJWT);

module.exports = router;