const { check, validationResult } = require('express-validator')
const UserModel = require('../../models/UserModel')
// todo переписать на более нормальные валидаторы почитать про pipe
module.exports = () => {
    return [
        check('email')
            .custom(async email => {
                let user = await UserModel.findOne({ email: email })

                if (!user) {
                    return Promise.reject('Could not find user with this email!')
                }
            }),
        check('password')
            .notEmpty()
            .withMessage("password is required"),
        (req, res, next) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(422).send({errors: errors.array() })
            }
            next()
        }
    ]
}