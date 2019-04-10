var express = require('express');
var router = express.Router();

const Availability = require("../models/availability");

const validateRegisterInput = require("../validation/register");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.post("/availability", (req, res) => {

    const {errors, isValid} = validateRegisterInput(req.body);

    const availability = new Availability({
        email: req.body.email,
        availability: req.body.availability,
    });

    Availability.findOne({email: req.body.email}).then(time => {
        // Check if user exists
        if (!time) {

            availability
                .save()
                .then(time => console.log(time))
                .catch(err => console.log(err));
        } else {
            Availability
                .updateOne({email: req.body.email}, {availability: req.body.availability})
                .then(time => console.log(time))
                .catch(err => console.log(err));
        }
    });
});

router.get("/availability", (req, res) => {

    console.log(req.param('email'));
    console.log(req.body);
    const {errors, isValid} = validateRegisterInput(req.body);

    Availability.findOne({email: req.param('email')}).then(time => {
        // Check if user exists
        if (!time) {
            console.log('error');
        } else {
            console.log(time);
            res.status(200).send(time);
        }
    });

    // const availability = new Availability({
    //     email: req.body.email,
    //     availability: req.body.availability,
    // });

    // Availability.findOne({email: req.body.email}).then(time => {
    //     // Check if user exists
    //     if (!time) {
    //
    //         availability
    //             .save()
    //             .then(time => console.log(time))
    //             .catch(err => console.log(err));
    //     } else {
    //         Availability
    //             .updateOne({email: req.body.email}, {availability: req.body.availability})
    //             .then(time => console.log(time))
    //             .catch(err => console.log(err));
    //     }
    // });


});


module.exports = router;
