var express = require('express');
var router = express.Router();
const controller= require('../Controllers/authControllers');
const auth= require('../middlwers/auth')
router.post('/login',controller.login);

router.post('/register',controller.register);

router.get('/me',auth.check, controller.me);


module.exports = router;
