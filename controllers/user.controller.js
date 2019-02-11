const User = require('../models/user.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.create = function (req, res) {
    let user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
    });

    user.save(function (err) {
        if (err) {
            res.send(err.toString());
        }
        res.send('User Created');
    })
};

exports.get = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            return res.send(err.toString());
        }
        res.send(user);
    });
};

exports.update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) {
            return res.send(err.toString());
        }
        res.send('user updated');
    });
};

exports.delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            return res.send(err.toString());
        }
        res.send('user deleted');
    })
};
