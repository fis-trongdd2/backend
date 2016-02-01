var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    username: String,
    name: String,
    dob: Date,
    gender: String,
    email: String,
    major: String,
    class: String
});

var Student = mongoose.model('Student', StudentSchema);

module.exports = Student;