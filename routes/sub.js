var express = require('express');
var mongoose = require('mongoose');
var Sub = require('../models/Sub');
router = express.Router();

router.get('/', function (req, res, next) {
    if (req.query.id) {
        var _id = mongoose.Types.ObjectId(req.query.id);
        Sub.find({_id: _id}, function (err, sub) {
            if (err) throw err;
            if (sub.length) res.status(404).send({error: 404});
            res.send(sub[0]);
        });
    }
    else
        res.status(404).send({error: 404});
});

router.post('/', function (req, res, next) {
    var body = req.body;
    if (body.id) {
        var _id = mongoose.Types.ObjectId(body.id);
        Sub.find({_id: _id}, function (err, sub) {
            if (err) {
                throw err;
            }
            if (sub.length == 0) {
                res.status(404).send({error: 404});
            }
            else {
                Sub.update({_id: _id}, body, function (err, updatedSub) {
                    if (error) throw err;
                    res.send('success');
                });
            }
        })
    }
    else
        Sub.create(body, function (err, newSub) {
            if (err) throw err;
            res.send(newSub);
        });
});

module.exports = router;