const UserModel = require("../models/UserModel")
const tokenModel = require("../models/TokenModel")
const bcrypt = require("bcrypt") 
const tokenService = require("./TokenService")
const UserDto = require("../dtos/UserDto")

class AuthService {
    async registration(email, password, name) {
        const hashedPassword = await bcrypt.hash(password, 3)

        let user = await UserModel.create({email: email, password: hashedPassword, name: name})

        const userDto = new UserDto(user)
        
        const tokens = await tokenService.generateTokens({ ...userDto })
    
    
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto }
    }


    async login(email, password) {

        const user = await UserModel.findOne({email: email})

        if (!user) {
            throw new Error("Пользователь не найден!")
        }

        const passwordIsValid = await bcrypt.compare(password, user.password)

        if (!passwordIsValid) {
            throw new Error("неверный пароль!")
        } 

        const userDto = new UserDto(user)
        
        const tokens = await tokenService.generateTokens({ ...userDto })

        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto }
    }

    async logout(refreshToken) {
        return await tokenModel.deleteOne({refreshToken})
    }


    async refresh(refreshToken) {

        if (!refreshToken) {
            throw new Error("unauthenticated")
        }
        
        const userDecodedData = tokenService.verifyRefreshToken(refreshToken)
    
        const refreshFromDB = await tokenModel.findOne({refreshToken})

        if (!userDecodedData || !refreshFromDB) {
            throw new Error("unauthenticated or user not found")
        }

        const user = await UserModel.findById(userDecodedData.id)

        const userDto = new UserDto(user)
        
        const tokens = await tokenService.generateTokens({ ...userDto })
    
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto }
    }
}

module.exports = new AuthService()