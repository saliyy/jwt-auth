const TokenService = require("../services/TokenService")

module.exports = function(req, res, next) {
    let authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).send("you need to authorize!")
    }

    let token = authHeader.split("Bearer ")[1]

    if (!token) {
        return res.status(401).send("where is access token man?")
    }

    const userData = TokenService.verifyAccessTokenToken(token)

    if (!userData) {
        return res.status(401).send("you need to authorize")
    }

    next()
}