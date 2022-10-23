const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title: String,
    price: String,
    description: String,
    images: [ String ],
    post: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
})
module.exports = mongoose.model('Post',postSchema)