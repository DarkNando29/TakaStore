const {Schema, model} = require("../db/connection") // import Schema & model

// User Schema
const UserSchema = new Schema({
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

// User model
const User = model("User", UserSchema)

module.exports = User