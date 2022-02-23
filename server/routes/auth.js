const Router =  require("express").Router
const authController = require("../controllers/AuthController")
const registrationValidator = require('../validators/auth/RegistrationBodyValidator')
const loginValidator = require('../validators/auth/LoginBodyValidation')

const router = new Router()

router.post('/registration', registrationValidator(), authController.registration)
router.post('/login', loginValidator(), authController.login)
router.post('/logout', authController.logout)
router.post('/refresh', authController.refresh)

module.exports = router