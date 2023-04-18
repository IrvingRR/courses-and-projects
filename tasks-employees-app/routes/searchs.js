const { Router } = require('express');
const { search } = require('../controllers/search');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get('/:collection/:term', [validateJWT], search);

module.exports = router;