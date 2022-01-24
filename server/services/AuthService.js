const UserModel = require("../models/UserModel")
const tokenModel = require("../models/TokenModel")
const bcrypt = require("bcrypt") 
const tokenService = require("./TokenService")
const UserDto = require("../dtos/UserDto")

class AuthService {
    async registration(email, password, name) {

        let user = await UserModel.findOne({email: email})

        if (user) {
            throw new Error("пользователь с таким email уже существует!")
        }

        const hashedPassword = await bcrypt.hash(password, 3)

        user = await UserModel.create({email: email, password: hashedPassword, name: name})

        const userDto = new UserDto(user)
        
        const tokens = tokenService.generateTokens({ ...userDto })

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
        
        const tokens = tokenService.generateTokens({ ...userDto })

        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return { ...tokens, user: userDto }
    }

    async logout(refreshToken) {
        const removeResult = await tokenModel.deleteOne({refreshToken})    

        return removeResult
    }


    async refresh() {

    }
}

module.exports = new AuthService()