const {Schema, model} = require("../db/connection") // import Schema & model

// Review Schema
const reviewSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    post: [
        {
            type: mongoose.Schema.Types.ObjectID,
            ref: 'Post'
        }
    ],
    post: [
        {
            type: mongoose.Schema.Types.ObjectID,
            ref: 'Review'
        }
    ],
})

// Review model
const Review = model("Review", reviewSchema)

module.exports = Review