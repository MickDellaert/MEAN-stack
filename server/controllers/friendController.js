const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Friend = require('../models/friend');

router.post('/',(req, res) => {
    const friend = new Friend({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        language: req.body.language
    });

    friend.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});

// -- Getting all friends with async await using find method
router.get('/', async (req, res) => {
    try {
        const friends = await Friend.find({});
        res.status(200).send(friends);
    } catch (error) {
        res.status(500).send(error);
    }
});

/*
// -- Getting all friends with then/catch
router.get('/',(req, res) => {
    Friend.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});
*/

// -- Getting one friend with findById function
router.get('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Friend.findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});

// -- Update a friend using put and findByIdAndUpdate method
router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    let friend = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        language: req.body.language
    };
    Friend.findByIdAndUpdate(req.params.id, {$set: friend}, {new: true})
        .then((result) => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
});


// Delete friend using delete and findByIdAndRemove method
router.delete('/:id',(req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Friend.findByIdAndRemove(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});


module.exports = router;
