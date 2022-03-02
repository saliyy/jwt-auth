const { check, validationResult } = require('express-validator')
const UserModel = require('../../models/UserModel')

module.exports = () => {
    return [
        check('name')
            .notEmpty()
            .withMessage('username is required')
            .not()
            .custom((val) => /[^A-za-z0-9\s]/g.test(val))
            .withMessage('Username not use uniq characters'),
        check('password')
            .notEmpty()
            .withMessage('password is required')
            .isLength({ min: 6 })
            .withMessage('password must be 8 characters'),
        check('email')
            .notEmpty()
            .withMessage('"email field is required!"')
            .custom(async email => {
              let user = await UserModel.findOne({ email: email })

              if (user) {
                  return Promise.reject('this email already in use!')
              }
            }),
        (req, res, next) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(422).send({errors: errors.array() })
            }
            next()
        }
    ]
}