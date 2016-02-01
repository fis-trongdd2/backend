var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new Schema({
    author: String,
    clicked: Boolean,
    hidden: Boolean,
    score: Number,
    locked: Boolean,
    sub: String,
    stickied: Boolean,
    comments: [String]
});

var Topic = mongoose.model('Topic', TopicSchema);

module.exports = Topic;