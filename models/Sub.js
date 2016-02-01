var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubSchema = new Schema({
    active_num: Number,
    description: String,
    subscribers: Number,
    type: String,
    url: String
});

var Sub = mongoose.model('Sub', SubSchema);
module.exports = Sub;
