var express = require('express');
var router = express.Router();
const controller= require('../Controllers/moviesControllers');
const auth = require('../middlwers/auth');
const admin= require('../middlwers/admin');

/* GET users listing. */
router.post('/',[auth.check,admin.check],controller.create);

router.put('/:id',[auth.check,admin.check],controller.update);

router.delete('/:id',[auth.check,admin.check],controller.delete);

router.get('/',[auth.check,admin.check],controller.list);

router.get('/:id',[auth.check,admin.check],controller.find);

router.post('/:id/reviews',auth.check ,controller.addreview);

router.get('/:id/reviews',controller.reviews);


module.exports = router;
