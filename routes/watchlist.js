var express = require('express');
var router = express.Router();
const controller= require('../Controllers/watchlisuControllers');
const auth = require('../middlwers/auth');

router.post('/',auth.check,controller.add)
router.delete('/:movie',auth.check,controller.delete);
router.get('/',auth.check,controller.list)

module.exports= router;