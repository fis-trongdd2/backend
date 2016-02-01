var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    author: String,
    body: String,
    edited: Boolean,
    parent_id: String,
    replies: [String],
    score: Number,
    sub: String,
    sub_id: String
});

var Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;