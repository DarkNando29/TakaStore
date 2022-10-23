const {Schema, model} = require("../db/connection") // import Schema & model

const postSchema = new Schema({
    title: String,
    price: String,
    description: String,
    images: [ String ],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
})

// Post model
const Post = model("Post", postSchema)

module.exports = Post