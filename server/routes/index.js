const Router =  require("express").Router
const authController = require("../controllers/AuthController")

const router = new Router()

router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.post('/logout', authController.logout)
router.get('/refresh', authController.refresh)
router.get('/someshit', (req, res) => {
    res.send({
        user: {
            id: 123,
            email: "ahaha@gmail.com",
            name: "Хуй"
        },
        accessToken: "dasd23e12fdawd22e12edqdasd"
    })
})

module.exports = router