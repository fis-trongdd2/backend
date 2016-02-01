var express = require('express');
var Student = require('../models/Student');
var router = express.Router();

/*Get student by id */
router.get('/', function (req, res, next) {
    if (req.query.username) {
        Student.find({username: req.query.username}, function (err, stu) {
            if (err) throw err;
            if(stu.length == 0) res.status(404).send({error: 404});
            res.send(stu[0]);
        });
    }
    else
        res.status(404).send({error: 404});
});

router.post('/', function (req, res, next) {
    var body = req.body;
    if (body['username']) {
        Student.find({username: body['username']}, function (err, student) {
            if (err) {
                throw err;
            }
            if(student.length == 0) {
                Student.create(body, function (err, newStudent) {
                    if (err) throw err;
                    res.send(newStudent);
                });
            }
            else {
                Student.update({username: body.username}, body, function (err, updatedStudent) {
                    if (err) throw err;
                    res.send({status: 'updated'});
                });
            }
        });
    }
    else
        res.status(404).send({error: 404});
});

module.exports = router;
