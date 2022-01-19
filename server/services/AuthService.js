const UserModel = require("./models/UserModel")
const bcrypt = require("bcrypt") 

class UserService {
    async registration(email, password) {
        if (await UserModel.findOne({email: email})) {
            throw new Error("пользователь с таким email уже существует!")
        }

        const hashedPassword = await bcrypt.hash(password, 3)
        const user = await UserModel.create({email, hashedPassword, name})


    }


    async login() {

    }

    async logout() {

    }


    async refresh() {

    }
}