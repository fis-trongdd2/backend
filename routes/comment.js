var express = require('express');
var mongoose = require('mongoose');
var Comment = require('../models/Comment');
router = express.Router();

router.get('/', function (req, res, next) {
    if (req.query.id) {
        var _id = mongoose.Types.ObjectId(req.query.id);
        Comment.find({_id: _id}, function (err, comment) {
            if (err) throw err;
            if(comment.length == 0) res.status(404).send({error: 404});
            res.send(comment[0]);
        });
    }
    else
        res.status(404).send({error: 404});
});

router.post('/', function (req, res, next) {
    var body = req.body;
    if (body.id) {
        var _id = mongoose.Types.ObjectId(body.id);
        Comment.find({_id: _id}, function (err, comment) {
            if (err) {
                throw err;
            }
            if (comment.length == 0) {
                res.status(404).send({error: 404});
            }
            else {
                body.edited = true;
                Comment.update({_id: _id}, body, function (err, updatedComment) {
                    if (error) throw err;
                    res.send('success');
                });
            }
        })
    }
    else
        Comment.create(body, function (err, newComment) {
            if (err) throw err;
            if (body.parent_id != null) {
                var parent_id = mongoose.Types.ObjectId(body.parent_id);
                Comment.find({_id: parent_id}, function (err, parentComment) {
                    if (err) throw err;
                    if(parentComment.length){
                        parentComment[0].replies.push(newComment._id);
                        parentComment[0].save(function (err) {
                            if(err) throw err;
                        })
                    }
                });
            }
            res.send(newComment);
        });
});

module.exports = router;