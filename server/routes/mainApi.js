const Router =  require("express").Router
const router = new Router()
const jwt = require("jsonwebtoken")

// middleware that check validation of jwt token
router.use(function timeLog(req, res, next) {
    const authHeader = req.headers['authorization']
    if (authHeader) {

        let enteredToken = authHeader.split("Bearer ")[1]

        if (enteredToken) {

            const verifiedToken = jwt.verify(enteredToken, process.env.JWT_ACCESS_SECREY_KEY)

            if (!verifiedToken) {
                const { refreshToken } = req.cookies

                if (!refreshToken) {
                    res.status(401).send("not authonticated!")
                } else {
                    const verifyRefresh = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECREY_KEY) 
                    
                    if (!verifiedToken) {
                        res.status(401).send("not authonticated!")
                    } else {

                    }
                }
             
            } else {
                next()
            }
        } else {
            res.status(401).send("not authonticated!")
        }
    }
    else {
        res.status(401).send("not authonticated!")
    }
  });

router.get('/testJWTmiddleware', (req, res) => { 
    req
    console.log("hey i accepted")
    res.send("all is ok!").status(200)
})

module.exports = router