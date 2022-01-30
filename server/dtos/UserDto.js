class UserDto {
    id;
    email;
    name;
    constructor(userModel) {
        this.email = userModel.email,
        this.id = userModel._id
        this.name = userModel.name
    }
}

module.exports = UserDto