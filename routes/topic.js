var express = require('express');
var mongoose = require('mongoose');
var Topic = require('../models/Topic');
router = express.Router();

router.get('/', function (req, res, next) {
    if (req.query.id) {
        var _id = mongoose.Types.ObjectId(req.query.id);
        Topic.find({_id: _id}, function (err, topic) {
            if (err) throw err;
            if (topic.length == 0) res.status(404).send({error: 404});
            res.send(topic[0]);
        });
    }
    else
        res.status(404).send({error: 404});
});

router.post('/', function (req, res, next) {
    var body = req.body;
    if (body.id) {
        var _id = mongoose.Types.ObjectId(body.id);
        Topic.find({_id: _id}, function (err, topic) {
            if (err) {
                throw err;
            }
            if (topic.length) {
                res.status(404).send({error: 404});
            }
            else {
                Topic.update({_id: _id}, body, function (err, updatedTopic) {
                    if (error) throw err;
                    res.send('success');
                });
            }
        })
    }
    else
        Topic.create(body, function (err, newTopic) {
            if (err) throw err;
            res.send(newTopic);
        });
});

module.exports = router;