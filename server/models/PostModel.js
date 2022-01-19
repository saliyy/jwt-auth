const { Schema, model } = require("mongoose")

const PostSchema = new Schema({
    title: { type: String, required: true, min: 2, max: 255 },
    body:  { type:  Blob, required: true },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = model("Post", PostSchema)