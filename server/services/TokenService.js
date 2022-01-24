const jwt = require("jsonwebtoken")
const tokenModel = require("../models/TokenModel")

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECREY_KEY, { expiresIn: "30m" })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECREY_KEY, { expiresIn: "30d" })

        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken){
        
        const tokenData = await tokenModel.findOne({user: userId})
    
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }

        return await tokenModel.create({user: userId, refreshToken})
    }
}

module.exports = new TokenService()