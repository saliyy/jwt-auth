const jwt = require("jsonwebtoken")
const tokenModel = require("../models/TokenModel")

class TokenService {
    static async generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECREY_KEY, { expiresIn: "30m" })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECREY_KEY, { expiresIn: "30d" })

        return {
            accessToken,
            refreshToken
        }
    }

    static async saveToken(userId, refreshToken){
        
        const tokenData = await tokenModel.findOne({user: userId})
    
        if (tokenData) {
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
      
        return await tokenModel.create({user: userId, refreshToken})
    }

    static verifyAccessTokenToken(enteredAccessToken) {
        try {
            return jwt.verify(enteredAccessToken, process.env.JWT_ACCESS_SECREY_KEY)
        } catch(ex) {
            return null
        }
    }

    static verifyRefreshToken(enteredRefreshToken) {
        try {
            return jwt.verify(enteredRefreshToken, process.env.JWT_REFRESH_SECREY_KEY)
        } catch(ex) {
            return null
        }
    }  
}

module.exports = TokenService