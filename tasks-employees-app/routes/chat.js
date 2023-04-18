const { Router } = require('express');
const { createMessage, createMessageToOneUser, updateMessage, deleteMessage, getMessages, getMessage } = require('../controllers/chat');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const { validateIsOwnerTheMessage } = require('../middlewares/validate-message');
const { validateExistUserWithID, validateUserIsNotDeleted, validateExistMessageWithID, validateMessageIsNotDeleted } = require('../helpers');

const router = Router();

router.post('/', [
    validateJWT,
    check('message', 'Message is required').not().isEmpty(),
    validateFields
], createMessage);

router.post('/:id', [
    validateJWT,
    check('id', 'Invalid user').isMongoId(),
    check('id').custom(validateExistUserWithID),
    check('id').custom(validateUserIsNotDeleted),
    check('message', 'Message is required').not().isEmpty(),
    validateFields
], createMessageToOneUser);

router.put('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistMessageWithID),
    check('id').custom(validateMessageIsNotDeleted),
    check('message', 'Message is required').not().isEmpty(),
    validateIsOwnerTheMessage,
    validateFields
], updateMessage);

router.delete('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistMessageWithID),
    check('id').custom(validateMessageIsNotDeleted),
    validateIsOwnerTheMessage,
    validateFields
], deleteMessage);

router.get('/', [
    validateJWT,
], getMessages);

router.get('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistMessageWithID),
    check('id').custom(validateMessageIsNotDeleted),
    validateFields
], getMessage);


module.exports = router; 