const Router =  require("express").Router
const router = new Router()

router.get('/testJWTmiddleware', (req, res) => { 
    req
    console.log("hey i accepted")
    res.send("all is ok!").status(200)
})

module.exports = router