const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, requried: true, min: 8, max: 255 },
    name: { type: String, required: true, min: 2, max: 255 },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }]
})

module.exports = model("User", UserSchema)