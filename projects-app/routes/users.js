const Router = require('express');
const { createUser } = require('../controllers/users');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateEmailExist } = require('../helpers/validations');

const router = Router();

router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('lastname', 'Lastname is required').not().isEmpty(),
    check('email', 'Invalid email address').isEmail(),
    check('email').custom(validateEmailExist),
    check('password', 'Passowrd must have minimum 8 characters').isLength({ min: 8 }),
    check('role', 'Role is required').not().isEmpty(),
    check('phone', 'Phone must have 10 characters').isLength({ min: 10, max: 10 }),
    check('areas', 'You must indicate minimum one area').isLength({ min: 1 }),
    check('technologies', 'You must indicate minimum one technology').isLength({ min: 1 }),
    
    validateFields

], createUser);

module.exports = router;