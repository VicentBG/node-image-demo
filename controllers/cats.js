const path = require('path');

const Cat = require('../models/cats');

exports.index = (req,res) => {
    res.sendFile(path.resolve('views/cats.html'));
};

exports.create = (req,res) => {
    var newCat = new Cat(req.body);
    console.log(req.body);
    newCat.save((err) => {
        if(err) {
            res.status(400).send('Unable to save cat to database');
        } else {
            res.redirect('/cats/getcat');
        }
    });
};

exports.list = (req,res) => {
    Cat.find({}).exec((err,cats) => {
        if(err) {
            return res.send(500, err);
        }
        res.render('getcat', {
            cats: cats
        });
    });
};