const Router =  require("express").Router
const router = new Router()
const checkTokenMiddleware = require("../middleware/CheckTokenMiddleware")


router.use(checkTokenMiddleware)
// main api routes
router.get('/testJWTmiddleware', (req, res) => {
    res.send("all is ok!").status(200)
})

module.exports = router