const mongoose  = require('mongoose');

const commentSchema = new mongoose.Schema({

    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
        ref: 'Post'
    }
},{timestamps: true})

module.exports = mongoose.model('Comment', commentSchema);