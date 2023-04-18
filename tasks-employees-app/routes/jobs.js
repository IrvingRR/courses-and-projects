const { Router } = require('express');
const { createJob, updateJob, deleteJob, getJobs, getJob } = require('../controllers/jobs');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { validateExistJobAlready, validateExistJobWithID, validateJobIsNotDeleted } = require('../helpers/');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post('/', [
    // validateJWT,
    check('job', 'Job is required').not().isEmpty(),
    check('job').custom(validateExistJobAlready),
    validateFields
], createJob);

router.put('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistJobWithID),
    check('id').custom(validateJobIsNotDeleted),
    check('job', 'Job is required').not().isEmpty(),
    validateFields
], updateJob);

router.delete('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistJobWithID),
    validateFields
], deleteJob);

// router.get('/', [validateJWT, validateFields], getJobs);
router.get('/', getJobs);

router.get('/:id', [
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(validateExistJobWithID),
    check('id').custom(validateJobIsNotDeleted),
    validateFields
], getJob);

module.exports = router;