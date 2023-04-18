const { Router } = require('express');
const { login, signInGoogle } = require('../controllers/auth');

const router = Router();

router.post('/login', login);
router.post('/google', signInGoogle);

module.exports = router