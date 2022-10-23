const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
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
module.exports = mongoose.model('User',userSchema)