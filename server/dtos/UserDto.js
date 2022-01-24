class UserDto {
    id;
    email;
    constructor(userModel) {
        this.email = userModel.email,
        this.id = userModel._id
    }
}

module.exports = UserDto