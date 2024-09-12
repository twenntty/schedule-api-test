const Router = require('express')
const router = new Router()
const controller = require('./authController')

router.post('/loginSchedule', controller.login)
router.post('/registerUserScheduleTest', controller.registration)
router.get('/users', controller.getUsers)

module.exports = router