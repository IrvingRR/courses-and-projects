const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateExistTask, validateExistTaskWithID, validateTaskIsNotDeleted, validateExistAreaInDB, validateExistJobInDB, validateExistUserWithID, validateUserIsNotDeleted } = require('../helpers/');
const { createTask, updateTask, deleteTask, getTasks, getTask, getTasksUser } = require('../controllers/tasks');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post('/', [
    validateJWT,
    check('title', 'Title is required').not().isEmpty(),
    check('title').custom(validateExistTask),
    check('description', 'Is necessary a little description').not().isEmpty(),
    check('area', 'Area is required').not().isEmpty(),
    check('area').custom(validateExistAreaInDB),
    check('job', 'Job is required').not().isEmpty(),
    check('job').custom(validateExistJobInDB),
    check('user', 'Is necessary indicate who will do the task').not().isEmpty(),
    check('user', 'Invalid user').isMongoId(),
    check('user').custom(validateExistUserWithID),
    check('user').custom(validateUserIsNotDeleted),
    validateFields
], createTask);

router.put('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistTaskWithID),
    check('id').custom(validateTaskIsNotDeleted),
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Is necessary a little description').not().isEmpty(),
    check('area', 'Area is required').not().isEmpty(),
    check('area').custom(validateExistAreaInDB),
    check('job', 'Job is required').not().isEmpty(),
    check('job').custom(validateExistJobInDB),
    check('user', 'Is necessary indicate who will do the task').not().isEmpty(),
    check('user', 'Invalid user').isMongoId(),
    check('user').custom(validateExistUserWithID),
    check('user').custom(validateUserIsNotDeleted),
    validateFields
], updateTask);

router.delete('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistTaskWithID),
    validateFields
], deleteTask);

router.get('/', [validateJWT,], getTasks);

router.get('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistTaskWithID),
    check('id').custom(validateTaskIsNotDeleted),
    validateFields
], getTask);

router.get('/user/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistUserWithID),
    check('id').custom(validateUserIsNotDeleted),
    validateFields
], getTasksUser);

module.exports = router;