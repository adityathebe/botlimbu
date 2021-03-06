var express = require('express');
var router = express.Router();

let {sendTextMessage} = require('../Template/templates');
let {getProfile} = require('../utility/getprofile');
let UserModel = require('../models/user');

/* GET home page. */
router.get('/', (req, res) => {
    res.render("admin");
});

router.post('/', (req, res) => {
    if(req.body.secret === process.env.MSG_SECRET) {
        UserModel.find({}, (err, users) => {
            for(user of users) {
                sendTextMessage(user.fb_id, req.body.message).then((msg) => {
                    console.log(`Message sent to ${user.name}`);
                }, (error) => {
                    console.log(error);
                });
            };
        });
        res.redirect('/admin');        
    } else {
        console.log('Invalid Secret Message!');
        res.redirect('/admin');
    }
});

module.exports = router;