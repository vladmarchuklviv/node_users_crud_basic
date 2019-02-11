const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');


router.get('/test', user_controller.test);
router.post('/create', user_controller.create);
router.get('/:id', user_controller.get);
router.put('/:id/update', user_controller.update);
router.delete('/:id/delete', user_controller.delete);



module.exports = router;
