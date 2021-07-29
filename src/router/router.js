const express = require('express');
const router = express.Router();
const UserController = require('../controller/controller')
const ServeyController = require('../controller/servey')

router.route('/signup').post(UserController.add)
router.route('/login').post(UserController.checkUser)
router.route('/user/serveys').get(ServeyController.get)
router.route('/servey').post(ServeyController.add)
router.route('/serveys/:serveyerUserId').get(ServeyController.getServeyByAdmin)
router.route('/servey-result/:serveyId').get(ServeyController.getServeyResult)
router.route('/servey-result').post(ServeyController.addServeyResult)


module.exports = router;