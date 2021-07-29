const express = require('express');
const router = express.Router();
const UserController = require('../controller/controller')

router.route('/signup').post(UserController.add)
router.route('/login').post(UserController.checkUser)


module.exports = router;