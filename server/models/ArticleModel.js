const { Schema, model } = require("mongoose")

const ArticleSchema = new Schema({
    title: { type: String, required: true },
    Body: { type: Blob, required: true},
    hashtag: { type: String },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
})

module.exports = model("Article", ArticleSchema)